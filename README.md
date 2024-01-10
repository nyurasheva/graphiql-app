# GraphiQL

## About The Project

GraphiQL is an open-source tool and a playground/IDE for graphQL requests. Has an interactive graphical interface that allows users to interact with GraphQL APIs (Application Programming Interfaces)

## Goal

Provide an intuitive interface that allows users to navigate through the available types, queries, and mutations. GraphiQL should help developers discover the capabilities of the GraphQL API effortlessly

Implement features such as syntax highlighting, and documentation to assist developers in constructing valid and efficient queries. This helps reduce errors and enhances productivity

Integrate documentation directly into GraphiQL, providing context-aware information about types and fields. This ensures that developers can refer to documentation while interacting with the API

Implement authentication and authorization mechanisms, ensuring that GraphiQL enforces the same security measures as the actual GraphQL API. This prevents unauthorized access and usage
## Built With

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## Features

- Authentication Integration: allow users to sign up and sign in
- Response Visualization: render GraphQL responses in a readable and interactive format
- Navigate ability: can navigate through the available types, queries, and mutations
- Syntax highlighting: provide syntax highlighting for GraphQL queries, mutations, and subscriptions
- Interactive Documentation: providing documentation information about types and fields

## Set up and run project locally

To set up and run project locally you need to clone repository from `develop` branch, install all dependencies:  
With NPM:

```
npm install
```

With Yarn:

```
yarn install
```

After all dependencies will be installed, run `prepare` script once to prepare `husky` hooks.  
Now you can run application locally, using `dev` script, or build production (`build`) and run them using `preview` script.  
Info about all available scripts you can see below.

## Scripts usage

### Common application scripts

- `dev`: launches development application server with hot refresh on any changes.
- `build`: makes production build of the application.
- `preview`: launches builded application on local server.

### ESLint scripts

- `lint`: runs ESLint to check code for issues.
- `lint:fix`: runs ESLint to check code and fix autofixable issues.

### Prettier scripts

- `prettier`: runs prettier to check code formatting.
- `prettier:fix`: runs prettier to check and auto format code.

### Jest scripts

- `test`: runs unit tests.
- `test:watch`: runs unit tests with watch mode, that will rerun tests on code changes.

### Husky scripts

- `prepare`: this script prepares husky hooks to use. Use it when you first time installing the application's environment to be able to use husky hooks.
