This is a takehome challenge for Stash! Done in React ⚛️. Bootstrapped with Create React App.

## Available Scripts

In the project directory, you can run:

### `yarn install`

It'll install packages! I love technology.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Runs test suite. This project uses `jest` and `react-testing-library`. They're neat.

## Challenge Guidelines

Stash has decided to pivot from investing to the GIF-search-engine space,
and needs your help to build out a web-app prototype for their new product.
Create a GIF search engine using Giphy's public API .
The app should have the following functionality:

1. The app serves a page consisting of a simple form with a text field and a
   button.
2. When the user enters text, use Javascript to request some GIFs from the
   Giphy API
3. When the API responds, populate the page with GIFs.
4. A user can click a GIF to add it to their "favorites".
5. A user can view another page which displays their favorite GIFs.

## Redux

This project uses a modular approach to Redux, with each module categorized by data within `src/redux/modules`. Each module contains its types, action creators, selectors, thunks, and reducer. Module action types are namespaced with the module name, for example `@@module/ACTION_TYPE`

This project uses `redux-thunk` for asynchronous data fetching, mostly for its quick setup time. In a larger project, we might use something more structured and opinionated (for example, `redux-saga`).

For async, we are following the convention of dispatching an action at the start of a request, and then on the success or failure of said request.

This allows us to mark data as 'loading' in state when the request begins, and we can then flip it when it resolves (or signify that it has an error, or that it has loaded at least once in the case of requests that might be called more than once like paginated reqs).

See the example thunk below

```
export const getSomething = () => async (dispatch) => {
  // SOMETHING_REQUEST
  dispatch(somethingRequest());
  try {
    const res = await fetch(...);
    const { data } = await res.json();

    // SOMETHING_REQUEST_SUCCESS
    dispatch(somethingRequestSuccess(data));
  } catch {
    // SOMETHING_REQUEST_FAILURE
    dispatch(somethingRequestFailure());
  }
};
```

## Component File Structure

Components rendered by a `Route` are in `src/pages`, these in turn render components from `src/components`. If a component is child another component, its folder will be within the folder of its parent. In the case that it becomes 'shared' by having another parent that renders it, it moves up to the nearest shared level of the parents.

Component files are named what they're named, not `index.js`, for easy grepping. IDEs are good enough at autocompleting imports.
