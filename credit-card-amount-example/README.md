# Credit Card Transfer Function Example

This folder contains the code similar the example shown in the slides. 
The mutation testing framework [Stryker](https://stryker-mutator.io/) is used
to realize the mutation testing itself. 

## Project setup

To try out the demo, Node.js is needed.

1. Get the dependencies via `npm install`
2. Check out [./src/index.js](./src/index.js) and the corresponding test file.

## To-do List

1. Run the original test suite with `npm run test:original`
2. See the two tests from [./src/__tests__/index.js](./src/__tests__/index.js) passing and the mutation score
3. Run the test suite with the new test that would kill the mutant with `npm run test:with-fix`
4. See that the test is failing
5. Fix the bug in the function in [./src/index.js](./src/index.js)  (hint: check the slides)
6. Run the test suite with the new test again (`npm run test:with-fix`)
7. See that all mutants were killed!
8. ???
9. Profit
