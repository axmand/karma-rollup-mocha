# karma-rollup-mocha
[![Build Status](https://travis-ci.org/axmand/karma-rollup-mocha.svg?branch=master)](https://travis-ci.org/axmand/karma-rollup-mocha)
##  1. unit test  ##
unit test to make sure your code runs well
### first step: ###
```
npm install
```
### second step: ###
```
npm install -g karma-cli
```
You will need to do this if you want to run Karma on Windows from the command line.

### start karam ###
```
karma start
```
##  2. build  ##
Building 'dist/bundle.js' as an output if you confirmed that all of your tests runs well.
### install rollup ###
```
npm install -g rollup 
```
You will need to install rollup in global if you want to run rollup on Windows from the command line.
### build ###
```
rollup -c
```
The default output folder's location : "./dist/*"
##  3. npm publish  ##
```
npm publish
```
Before publish you code to npm,you need to ensure npm contains one user at least.
### add npm user ###
```
npm adduser
```
Then add username/password/email

