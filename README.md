# Rock, Paper, Scissors Game

<h4>Desployed version:</h4><a href="https://rock-paper-scessior-g5khd89vu-hamdi-ben-yaflah.vercel.app/">Rock, Paper, Scissors Game</a>

## Demo

https://user-images.githubusercontent.com/34003032/147869758-b850584b-af7a-4fca-b29c-e6151c1357ba.mov

## Installation

You can simply clone this repository and run `npm start` to start the project.

## Technologies used

<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a><a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a><a href="https://www.cypress.io" target="_blank"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40"/> </a><a href="https://www.cypress.io" target="_blank"> <img src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png" alt="antdesign" width="40" height="40"/> </a><a href="https://avatars.githubusercontent.com/u/44036562?s=280&v=4" target="_blank"> <img src="https://testing-library.com/img/octopus-128x128.png" alt="react-testing-library" width="40" height="40"/> </a><a href="https://avatars.githubusercontent.com/u/44036562?s=280&v=4" target="_blank"> <img src="https://avatars.githubusercontent.com/u/44036562?s=280&v=4" alt="react-testing-library" width="40" height="40"/> </a>

## Folder Structure

The folder structure usually depends on team preferences. For me, I always want to keep my files (the component itself, its style and its test) in one place.

```bash
├── cypress
│   ├── e2e
│       ├── *.cy.test.ts
├── src
│   ├── components
│       ├── ComponentName
│           ├── ComponentName.module.css
│           ├── ComponentName.tsx
│           ├── ComponentName.test.ts
│   ├── hooks
│       ├── HookName
│           ├── HookName.tsx
│           ├── HookName.test.ts
│   ├── pages
│       ├── PageName
│           ├── PageName.module.css
│           ├── PageName.tsx
│           ├── PageName.test.ts
│   ├── typings
│   ├── utils
│       ├── utils.ts
│       ├── utils.tes.ts
```

## Functionalities

The user has to choose between two game modes:

<h3>Solo Mode</h3>

In this mode, the user is playing against the computer.

First, users are asked to type their username (they can change it afterward), then they have to choose between 'Rock', 'Paper' or 'Scissor', and the computer's choice is generated randomly. If the user wins, the score (<span style="color:green;">in green</span>) increments by one, and if the computer wins, the score (<span style="color:red;">in red</span>) increments by one.

<h3>Auto Play Mode</h3>
In this mode, it's computer 1 vs computer 2, so as a user, you only need to start the game and watch.

PS: In terms of score, computer 1 in auto-play mode is behaving as a user in solo mode. For instance, "You lose" means Computer 1 has lost the round.

In both modes:

- Users can switch between two game modes.
- Users can restart the game at any point.

## Pipeline

I built a simple CI/CD pipeline with Github actions.

It runs on every commit to the master branch or any pull request (I did not create any pull request for this project).

The pipeline runs the following steps:

<ol>
    <li> Install all dependencies.
    <li> Build the application.
    <li> Run unit and integration tests.
    <li> Check types.
    <li> Run e2e tests.
</ol>

The deployment is done automatically on each commit to master (configured in Vercel)

## Tests

My test philosophy is derived from <a href="https://kentcdodds.com/"> Kentcdodds</a>'s approach.

When it comes to tests, I follow these two principles:

<ul>
 <li>"The more your tests resemble the way your software is used, the more confidence they can give you".
 <li>'Write tests. Not too many. Mostly integration.'
</ul>

### Unit test:

For the unit test, I tested the custom hook `useLocalStorage` and all function exported by `utils.ts` file

### Integration test:

Since we are using a UI library (which is unit tested), we only test how these components interact with each other. Each component/page has its test under the same folder.

I added `data-testid` attribute to give element significant meaning and get them by testid in tests.

### E2E test:

E2E test can give us a HUGE amount of confidence but the thing is, we need to be careful with writing e2e tests since they are heavy in the pipeline, so we always need to ask ourselves _"what needs to be tested? and what's not?_".
I tried to test multiple scenarios such as <strong>User is able to play vs computer </strong>etc…

I added `data-cy` attribute to give elements significant meaning and get them by _data-cy_ in tests.

<strong>PS:</strong> For some ant design components, we can't assign `data-*` attribute, that's why I wrap them with a `div` element sometimes.
