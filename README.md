# karma-rollup-mocha
start unit test to make sure your code runs well
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
if you confirm tha all of your tests success,build 'bundle.js' as an output.
### install rollup ###
```
npm install -g rollup 
```
You will need to install rollup in global if you want to run rollup on Windows from the command line.
### build ###
```
rollup -c
```
the output folder location is "./dist/*",the default is bundle.js
