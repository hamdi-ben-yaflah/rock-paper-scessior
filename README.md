# Rock, Paper, Scissors Game

<h4>Desployed version:</h4><a href="https://rock-paper-scessior-fdjmei4gb-hamdi-ben-yaflah.vercel.app/">Rock, Paper, Scissors Game</a>

## Installation

You can simply clone this repository and run `npm start` to start the project.

## Technologies used

<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a><a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a><a href="https://www.cypress.io" target="_blank"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/> </a>
react testing library, github actions, antd

## Structure

## Functionalities

## Pipeline

I built a simple CI/CD pipeline with Github actions.

It runs on every commit to master branch or any pull request (I did not create any pull request for this project).

The pipeline runs the following steps:

<ol>
    <li> Install all dependancies
    <li> Build the application
    <li> Run unit and integration tests
    <li> Check types
    <li> Run e2e tests
</ol>

The deployment is done automatically on each commit to master (configured in Vercel)

## Tests

We all know that: "The more your tests resemble the way your software is used, the more confidence they can give you".

When it comes to tests, I follow this approach 'Write tests. Not too many. Mostly integration.' from <a href="https://kentcdodds.com/"> Kentcdodds</a> .

### Unit test:

For the unit test, I tested the custom hook `useLocalStorage` and the all function exported by `utils.ts` file

### Integration test:

Since we are using a UI library (which is unit tested), we only test how these component interaction with each others. Each component/page has its test under the same folder.

### E2E test:

E2E test can give us a HUGE amount of confidence but the thing is, we need to be carefull with writing e2e tests since their are heavy in pipeline, so we always need to ask ourselves "what needs to be tested? and what's not".

I tried to test multiple scenario such as: <strong>Play vs computer</strong> and <strong>Auto play</strong>

## Perspective
