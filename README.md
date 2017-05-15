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
If you confirmed that all of your tests runs well,you can build 'bundle.js' as an output.
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
