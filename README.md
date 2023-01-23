# Getting Started with Techstudio App

This project can be previewed Live [Click Here To View](https://tsacademy.vercel.app/).

## Contribution

- Clone the dev branch and make all Pull Requests to the dev branch.
- In this project conventinal commmit lint is installed to enforce commit messages follows the industry standard pattern.

### Examples includes

JavaScript

  'build': 'For Build related commits',
  'chore': 'For smaller less meaninful additions or subtractions',
  'ci': 'For Continious Integration related Commits(DevOps)',
  'docs': 'For commiting changes related to Documentaion',
  'feat': 'For commiting changes related a particular feature',
  'fix': 'For commits related to bug fixes',
  'perf': 'For commits related to performance enhancement',
  'refactor': 'For commits related to refactoring codes',
  'revert': 'For commits related to reverting changes/commits',
  'style': 'For commits related to adding styles',
  'test': 'For commits related to test additions',
]


### Usage

This is a sample of a good and bad commit messages

JavaScript
"foo: some message" # fails
"fix: some message" # passes
"feat(scope): some message" # passes


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn format`

Launches the prettier formatter in the interactive watch mode.\

### `yarn lint`

Launches the eslint formatter in the interactive watch mode.\

### `yarn prepare`

Launches husky and runs all husky scripts. For this project only a pre-commit hook is included.
To run `npx lint-staged` in an attempt to lint all files before any commit is made.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This App is live: [Check it out](https://techstudio.com)