#!/bin/bash

# Test if npm is installed

# Install supervisor, express
sudo npm install -g supervisor
sudo npm installed -g express

# Install dep locally
npm install
# Running server
supervisor -w '.,views,routes' -e 'nunj' bin/www
