import path from 'path';
import express from 'express';
import passport from 'passport';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import routes from './routes';

import './middleware/localstrategy';
import './middleware/bearerstrategy';

const app = express();

// Allows cross origin requests to our API
// aka we can build a mobile app to talk to this server, too ;)
app.use(cors());

// Compresses gzips of requests and files for optimized speed!
app.use(compression());

// Terrific security middleware for common attacks
app.use(helmet());

// Serves static files from public folder
app.use(express.static('public'));

// Body Parser to intercept requests and add req.body
app.use(express.json());

// Initialize Passport on our app
app.use(passport.initialize());

// Useful logging tool for all incoming requests
app.use(morgan('dev'));

app.use(routes);

// This will catch any url bar route that's not accounted for in routes
app.use('*', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!\n`));