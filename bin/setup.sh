#!/bin/bash

# Test if npm is installed

# Install supervisor, express
npm install -g supervisor
npm installed -g express

# Running script
supervisor -w '.','views', 'routes' -e 'nunj' www/bin
