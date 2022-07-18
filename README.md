# Getting Started with Create React Base App (Typescript, Linter and Git hooks)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Code correction and formatting functionalities are added, as well as hooks for managing version control (git).

The following packages have been added as development dependencies in this distribution:

- eslint
- prettier
- eslint-config-prettier
- husky
- lint-staged

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint:format`

Run this command to apply prettier with the write option on all files and directories of the project.

### `yarn lint:linter`

Run this command to apply eslint with the fix option on all files and directories of the project for the following extension files: `.ts .tsx .js .jsx`.

When a git commit command is executed, internally the commands `yarn lint:format` and `yarn lint:linter` will be executed, commands that are inserted in the `pre-commit` file of the `.husky` directory.

When a git push command is executed, internally the commands `yarn lint:format` and `yarn lint:linter` will be executed, commands that are inserted in the `pre-commit` file of the `.husky` directory.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

And if you want to improve this version you can do so indicating the changes made in detail
