# Part 1: Set up the basic Order Page

In this part, we will set up the base React project and build the skeleton of
the Order page. We will use the
[React Accelerate](https://github.com/PublicisSapient/cra-template-accelerate)
template to set up the base project. This template is based on
[Create React App](https://github.com/facebook/create-react-app) and adds
libraries and tools to write web applications using best practices.

## General Guidelines

- Use raw CSS to style your components. Do not use any CSS framework or
  component library. This is to test your basic understanding of CSS. The
  _Accelerate_ template provides a starter style sheet under `/src/styles`.
- Use CSS Variables to ensure that you are not repeating color values, spacings
  etc.

## Instructions

- Create a React app in a local repo using the name `react-takeout`. Use the
  detailed instructions in the Getting Started section of the
  [React Accelerate](https://github.com/PublicisSapient/cra-template-accelerate#getting-started)
  template. Follow these instructions precisely to avoid wasting time.

- Install a couple of libraries that we will use later.

```sh
npm install @react-force/number-utils react-icons

# or

yarn add @react-force/number-utils react-icons
```

- Be sure not to delete the `HomePage` under `/src/pages/HomePage`. We will use
  this page as a guidance for our order page.

- Commit your changes so far:

```sh
git add .
git commit -m "Added dependencies for exercise"
```

- Create a branch for your solution. It's always a good practice to work on a
  branch so that you can create pull requests for others to review your code.

```sh
git branch solution
git checkout solution
```

- Create a minimal order page at `/src/pages/OrderPage/OrderPage.tsx`, e.g. make
  it render "Order Page". Mimic the structure of the home page. Also create an
  `index.ts` file in the same folder and add a line to
  `export * from './OrderPage'`. Add the same line to `/src/pages/index.ts`.
  This is called barreling (see
  [here](https://basarat.gitbook.io/typescript/main-1/barrel)) and provides a
  convenient way of expose only the required modules from a folder.

- Now import `OrderPage` in App.tsx and change the `/` route to point to it.
  Change the route for the `HomePage` to `/home`, just to keep it around!

- Make sure that `OrderPage` renders when the browser points to
  http://localhost:3000/.

- Now create two directories under `/src/pages/OrderPage` called `MenuView` and
  `OrderView`. Create minimal components under these directories called
  `MenuView` and `OrderView` respectively. Expose them using `index.ts` files.

- Import `MenuView` and `OrderView` on the `OrderPage` and render them instead
  of the placeholder content created earlier. Lay out the two components
  side-by-side using flexbox. `MenuView` should be on the left and take up as
  much room as available. `OrderView` should be on the right and occupy exactly
  400px. Both views should be independently scrollable in case their content
  overflows the height of the window. Test with "Lorem ipsum" content. See
  instructions under [Visual Design](/README.md#Visual Design) for detailed
  requirements and implementation hints.

That's it for part 1. Now move on to [part 2](part-2-menu-view.md).
