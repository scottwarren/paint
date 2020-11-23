# Paint

Basic paint application built as a coding challenge and to learn about drawing with the Canvas element.

Bootstrapped with Create React App (with TypeScript)

## Requirements

- Built and tested with Node `v14.15.1` (run `nvm use` in the project directory if you have NVM installed)

## Setup

- Clone repo
- Install dependencies: `yarn install`
- Run local server: `yarn start`
- Open http://localhost:3000 (if you have something already running on port `3000`, it should automatically rollover to the next available port, likely `:3001`)

## Special Mentions

Using `create-react-app@v4.0.0` had an issue with TypeScript (see: [https://github.com/facebook/create-react-app/issues/9868]()), so I [had to specify a pre-release version of `react-scripts` until `v4.0.1` is released to fix the issue](https://github.com/JanBussieck/tiliter-file-picker/commit/b20f6fdc3204d43d3f1c5cd59845d5a63a70f2ad)

## Resources

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html
