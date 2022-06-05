# Movie Finder App
A simple UI enabling searching for movies within [the Movie DB](https://www.themoviedb.org/) and view the results.

For a visual example, please see the `screenshots` folder.

## Technologies used

* React
* Babel
* Webpack
* Yarn
* Styled Components
* Jest
* React Testing Library

## Usage instructions

Build the packages by running `yarn`

### Dev environment

Run: `yarn start` to run the app locally using the webpack server and hot module reload.

### Production environment

Run: `yarn build` to run the app using the production build.

### Tests

Run: `yarn test` for Jest to run all tests.

## Project structure

The project has 3 main areas of focus.
1. `components`, where all visual components exist without any business logic
2. `modules`, where all components with business logic will exist (for now only the main App component)
3. `services`, where all API requests exist

You will also see a `constants.styles.js` file that for now hosts all theme related data. Obviously, for the project to scale, this would have to be refactored to follow a more traditional `themes` structure with `media` and `colours` being their own files.

If we want to consider how this project will scale structure wise, the current visual components would be extracted in a toolkit/ui library to promote reusability even further under an atomic design.

To make the app work as expected without the use of Redux, I decided to go with prop-drilling just to save some time. I would not suggest this approach if we were to scale this app.

## Testing strategy

`Jest` and `React Testing Library` were used for the tests.

The `spec` files within `components` and `services` are more traditional/isolated tests but the ones within `modules` are more functional based.
This means that the `App` component is using parts of the visual components to test that the hooks work correctly. We could avoid this by extracting the hooks in their own structure slice and test everything in isolation but given the scope of this project, I felt like a functional test would be better.
