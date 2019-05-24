# coding-interview-cards

The goal of this fun side project is to learn, hone, and sharpen Matt's React skills, utilizing his already strong styling background.  A basic MySQL database, with a Node/Express REST API, are set up which he'll be taking over as he learns these concepts at Covalence.  Beyond his learning, this project will hopefully be of use to other students and junior level developers practice memorizing answers to common JavaScript interview concepts!  

The fist version will be simple question and answer cards, but hopefully we can scale it up with fun ideas!

## Table of Contents

- [Running the Project](#running-the-project)
- [Changelog](#changelog)
    - [Version 0.0.1](#version-001)
    - [Version 0.5.1](#version-051)

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
* basic dependencies installed
* dev and build scripts for the project included
* webpack set up (aaarrrgghhhh)
* client folder with basic React app
* server folder with Express server running
    * common middlware on the server
    * db connection with knex
    * config for production/dev environments
    * routes for REST API

#### Version 0.5.1

Authentication Added
* passport implemented
* bearer strategy implemented
    * router/endpoint middleware added
* local strategy implemented
    * allows users to login with email/password
* password utility with bcrypt
    * take a plaintext password and return a salted hash
    * can compare a given password to the hash
* tokens utility added
    * can create signed json web token payloads
    * can validate given tokens from bearer strategy
* login/register routes working!