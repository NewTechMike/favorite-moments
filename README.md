# Favorite Moments

## Introduction

# Overview
- This is a site to record and list your favorite moments from Books, Movies, Songs, Comics, Video Games, Shows, etc

# Example
Type out the Title ie: HP & the OOTP
Type out a subject ie: Book
Enter a description of your favorite moment ie: "expelliamus"

# Setup and Installation
## Repository 
* Fork and clone repo from https://github.com/NewTechMike/favorite-moments 
* In Terminal, ``` cd ``` into the same directory the above repo was forked
```bash
bundle install 
```
```bash
npm install --prefix client
```

* Next, launch the backend on http://localhost:3000 with 
```bash
  rails s
```
* Launch the frontend on http://localhost:4000 with 
```bash
  npm start --prefix client
``` 

## Ruby

* Verify you have the lastest version of Ruby installed with: 

```bash
  rvm install 2.7.4 --default
```

* Also install the latest versions of bundler and rails with:
```bash 
gem install bundler
gem install rails
```

## NodeJS

* Verify the lastest version of Node is at least 16
```bash
nvm install 16
nvm use 16
nvm alias default 16
```
* You can also update your npm with:
```bash
npm i -g npm
```

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
