import { Router } from 'express';
import passport from 'passport';
import questionsRouter from './questions';
import categoriesRouter from './categories';
import choicesRouters from './choices';
import helloRouter from './hello';

const router = Router();

// Router Middleware:
// Intercepts any incoming API request and will attempt to
// validate a token to serialize a user object onto the request
router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next)
});

router.use('/hello', helloRouter);
router.use('/questions', questionsRouter);
router.use('/categories', categoriesRouter);
router.use('/choices', choicesRouters);

export default router;