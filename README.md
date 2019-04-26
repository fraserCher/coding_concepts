# Coding Concepts
This application is both a client application and a server. The server uses express (https://expressjs.com/) and is configured to listen on port 3001. The client side application is built on the React framework (https://reactjs.org/). Installing react and creating a project also bundles a development server which returns the application on port 3000.

One of the reasons we have both a client and a server application is where we want this application to go in future and it's used as a teaching mechanism. We chose to use NodeJS because the barriers to development are very low and Fraser wanted to try out TypeScript.
## Development Requirements

* Node (7.6 or newer) and npm (4.1.2 or newer)
* 400 MB storage space

### Gotcha
Jest is used as the test framework, but this does not work in version 11.11 of Node as documented here: https://github.com/facebook/jest/issues/8069

## Getting Started

Download and install dependencies by running, in the project directory:

`npm install`

We use the TypeScript compiler to build the javascript needed for the Express server. We can run a script to invokle this by running

`npm run server_build`

To start the Express server, build the react application and start the development server to serve the React app run
 
 `npm run dev`

 This will also start nodemon, which listens for changes inside of the src folder and restarts the React app and refreshes / opens the browser

## Available Scripts

In the project directory, you can run:

### `npm server_prebuild`
Run tslint rues against the typescript configured in the server folder

### `npm server_build`
Compiles the typescript files to javascript according to the rules in server/tsconfig.json

### `npm server_start`
Starts the express server on [http://localhost:3001]

### `npm dev`
Runs both the express server on port 3001 and the app server for the react front end on port 3000

## Node Specific Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
