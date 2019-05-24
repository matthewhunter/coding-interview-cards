import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import config from '../../config';
import Tokens from '../../db/queries/tokens';

// Gets a user payload, inserts a new token row,
// Uses that to encrypt a token
// Updates the row with the new token and returns the token
export const CreateToken = async (payload) => {
    let [tokenid] = await Tokens.addNew(payload.userid);
    payload.accesstokenid = tokenid;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await Tokens.updateToken(payload.accesstokenid, token);
    return token;
}

// Checks the given token if it decodes and matches the stored token
export const ValidateToken = async (token) => {
    let payload = jwt.decode(token);
    let [accesstokenid] = await Tokens.findOne(payload.accesstokenid, token);
    if(!accesstokenid) {
        return new Error('Invalid Token!');
    } else {
        return payload;
    }
}