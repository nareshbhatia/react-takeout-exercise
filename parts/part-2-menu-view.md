# Part 2: Implement Menu View

In this part, we will implement the left side of the order page, which is the
menu view.

## Instructions

- `MenuView` uses a `Menu` object to render its contents. The type definition of
  `Menu` has been supplied to you. Copy it from `/code/src/models/Menu.ts` in
  this repo to `/src/models/Menu.ts` in your repo. Note that the `/code` folder
  in this repo is structured to mimic the root folder of your `react-takeout`
  repo.

- Review the `Menu` type. Note that it consists of a collection of menu items
  that are grouped into sections (such as appetizers and salads). The menu
  itself is a collection of these sections, sequenced as specified by the
  `sectionIds` array.

- The data for the menu is also given to you. Copy it from
  `/code/src/mocks/mockMenu.ts` to `/src/mocks/mockMenu.ts` in your repo.

- Note that we are using a library called
  [Mock Service Worker](https://mswjs.io/) to mock our server. You don't have to
  know too much about it. All you need to know is that the handlers in the file
  `/src/mocks/handlers.ts` are responsible for intercepting HTTP requests and
  returning the desired responses. Open this file and review the handler for the
  `GET /top-10-movies` request. Note how it returns the movie data stored in the
  `mockMovies.ts` file.

- Mimic the above handler to intercept the `GET /menu` request and return the
  menu stored in the `mockMenu` file.

- Write a hook called `useMenu` in the file
  `/src/pages/OrderPage/MenuView/useMenu.ts` to fetch the menu using the
  `GET /menu` request. Mimic `useMovies` from the home page.

- Now use the `useMenu` hook in `MenuView` to fetch the menu and render it.
  `MenuView` should render the section views using the `SectionView` component.
  `SectionView` should render menu items within that section using
  `MenuItemView`.

- Be sure to style `MenuView` and its children to match the visual design. It is
  very important to pay attention to details here and honor the spirit of the
  design.

- As the cursor hovers over each menu item it should change the background color
  of the entire card to `grey-100`. Also, the cursor should change to a pointer
  to indicate that the menu item is clickable.

- Write a simple unit test for `MenuItemView` to make sure it renders correctly.
  Since this is a very small component, you can use a snapshot test for it. See
  `/src/pages/NotFoundPage/NotFoundPage.test.tsx` for an example. Run your unit
  tests by executing `npm test` (runs lint & coverage) or `npm run test:watch`
  (runs in interactive mode).

- Write a unit test for `MenuView`. Since this is a large component, do not use
  a snapshot test. Instead, render the component using the sample data in the
  mock server and verify that 5 sections and 12 items are rendered. Note that we
  are not mocking anything in the test code. We let the test make a network
  call, which is intercepted by Mock Service Worker and a response is returned.
  This is the beauty of MSW - it allows you to test your components without
  excessive mocking! See `/src/pages/HomePage/HomePage.test.tsx` for an example.

- Write a Storybook story to show your `MenuView` component. Again this story
  should fetch data from the Mock Service Worker.

That's it for part 2. Now move on to [part 3](part-3-order-view.md).
