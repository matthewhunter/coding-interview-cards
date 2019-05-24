const path = require('path');
let nodeExternals = require('webpack-node-externals');

const serverConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/server/server.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals(), { knex: 'commonjs knex' }],
}

const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: ['@babel/polyfill', './src/client/index.js'],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    }
}

module.exports = [serverConfig, clientConfig];