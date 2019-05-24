# coding-interview-cards

The goal of this fun side project is to learn, hone, and sharpen Matt's React skills, utilizing his already strong styling background.  A basic MySQL database, with a Node/Express REST API, are set up which he'll be taking over as he learns these concepts at Covalence.  Beyond his learning, this project will hopefully be of use to other students and junior level developers practice memorizing answers to common JavaScript interview concepts!  

The fist version will be simple question and answer cards, but hopefully we can scale it up with fun ideas!

## Running the Project

You can clone this repo, move into the directory, install dependencies, and be able to run a script.  A `development.js` will be needed from either of us to run on a local development environment.  First time setup will be synced to a deployed "dev" database that Matt can learn with.

Local Development:
```bash
git clone https://github.com/matthewhunter/coding-interview-cards.git
cd coding-interview-cards
npm install
npm run dev
```

Production:
```bash
npm run start
```

## Changelog

#### Version 0.0.1

Basic project setup
    - basic dependencies installed
    - dev and build scripts for the project included
    - webpack set up (aaarrrgghhhh)
    - client folder with basic React app
    - server folder with Express server running
        - common middlware on the server
        - db connection with knex
        - config for production/dev environments
        - routes for REST API