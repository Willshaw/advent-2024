# Advent of Code 2024

Written in Typescript, TDD with Jest.

To make add a new challenge, run `new.sh` to copy the prev day

```
# to add 10, make sure 9 is there, etc
./new.sh 10
```

Then update `src/index.ts` to clone the imports/run methods etc for the previous day (until I do something smarter with it)

Run the solution:

```
npx tsc -w
# choose solution to run from the list
node dist/index.js
# optionally supply the argument you want to run and watch during dev
node --watch dist/index.js 10
```
