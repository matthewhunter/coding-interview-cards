import path from 'path';
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.static('public'));

app.use(routes);

// This will catch any url bar route that's not accounted for
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\x1b[4mServer listening on port ${port}!`));