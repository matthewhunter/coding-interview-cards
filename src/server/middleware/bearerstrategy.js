import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import { ValidateToken } from '../utils/security/tokens';
import Users from '../db/queries/users';

// If provided a token, will validate and authenticate it
// Allows us to persist logins via jwt
passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        let payload = await ValidateToken(token);
        let [user] = await Users.findById(payload.userid);
        if(user) {
            done(null, user);
        } else {
            //unauthorized, fool
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}))