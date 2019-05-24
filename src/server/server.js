import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import routes from './routes';

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

// Useful logging tool for all incoming requests
app.use(morgan('dev'));

app.use(routes);

// This will catch any url bar route that's not accounted for
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\x1b[4mServer listening on port ${port}!`));