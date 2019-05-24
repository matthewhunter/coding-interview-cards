import passport from 'passport';
import LocalStrategy from 'passport-local';
import { ComparePassword } from '../utils/security/passwords';
import Users from '../db/queries/users';

// Can add a req.user to object to requests
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Receveives a user and password and attempts to authenticate
passport.use(new LocalStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        let [user] = await Users.findByEmail(email);
        if (user && ComparePassword(password, user.password)) {
            // Don't wanna send their password across the network ;)
            delete user.password;
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(e);
    }
}))