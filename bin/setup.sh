#!/bin/bash

# Test if npm is installed

# Install supervisor, express
sudo npm install -g supervisor
sudo npm install -g express

# Install dep locally
npm install
# Running server
supervisor -w '.,views,routes' -e 'js,nunj' bin/www
