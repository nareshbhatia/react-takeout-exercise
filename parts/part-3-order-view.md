# Part 3: Implement Order View

In this part, we will implement the right side of the order page, which is the
order view.

## Instructions

- `OrderView` uses an `Order` object to render its contents. The type definition
  of `Order` has been supplied to you. Copy it from `/code/src/models/Order.ts`
  in this repo to `/src/models/Order.ts` in your repo.

- Review the `Order` type. Note that it consists of an id (not used in this
  exercise) and an array of order items. Order items contain the associated menu
  item's id, name and price.

- As shown in the visual design, when the order is empty (i.e. no order items),
  `OrderView` should show a message to click menu items to get the order
  started. When there are one or more order items in the order, `OrderView`
  should show a Checkout button and the order total.

- `MenuView` and `OrderView` need to coordinate with each other. When a menu
  item is clicked, a new `OrderItem` should be created and added to the order.
  We will do this using an `OrderContext`. This context will sit at the
  `OrderPage` level and carry the current order. Create `OrderContext` at
  `/src/pages/OrderPage/OrderContext.tsx`. Use the pattern that is used in the
  [Accelerated News](https://github.com/PublicisSapient/accelerated-news)
  example - see
  [AuthContext.tsx](https://github.com/PublicisSapient/accelerated-news/blob/main/src/contexts/AuthContext/AuthContext.tsx).
  `AuthContext` carries `AuthState` and `AuthStateSetter`. Similarly,
  `OrderContext` should carry an `Order` and an `OrderSetter`. We will also
  create an `OrderContextProvider` and a `useOrderContext` hook in the
  `OrderContext.tsx` file. If you are curious, this pattern has been popularized
  by Kent C. Dodds in his blog article
  [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively).

- Provide `OrderContext` to the entire `OrderPage` by adding it to
  `OrderPage.tsx`. We now have a mechanism to communicate order item creation
  from `MenuView` to `OrderView`.

- Modify `MenuItemView.tsx` to use the `useOrderContext` hook. Allow
  `MenuItemView` to add an `OrderItem` to the `OrderContext` whenever it is
  clicked. This completes the wiring of the `MenuView`.

- Now wire the `useOrderContext` hook into the `OrderView`. OrderView should
  rerender order items whenever `OrderContext` changes. It should also recompute
  the total at this time.

- The total should be formatted with thousands separators. Use
  `NumberUtils.formatAsMoney()` for this.

- Allow deletion of order items using the delete icon shown in the visual
  design. Use react-icons to render the delete icon:
  `import { AiTwotoneDelete } from 'react-icons/ai`.

- Finally, navigate to a `CheckoutPage` when the user clicks on the 'Checkout'
  button. Create a placeholder page for this at
  `/src/pages/CheckoutPage/CheckoutPage.tsx`. Wire it into the router. The
  checkout page should have a link back to the order page. See the visual design
  below:

![Checkout page](/assets/checkout-page.png)

- Run your test suite again to make sure that all your tests are running
  successfully (`npm test`). You will find that it fails because of the
  introduction of `OrderContext`. `MenuView` now needs to be wrapped with
  `OrderContextProvider`. Fix your test suite by making this change to
  `MenuView` and `MenuItemView` tests.

- Add one more test for `MenuItemView` to verify that it adds the item to the
  order when clicked. This test can be heavily simplified by creating a simpler
  `OrderView` local to the test - this one simply renders a list of order items
  from the order context. This approach is in line with the
  [React Testing Library Guiding Principles](https://testing-library.com/docs/guiding-principles/):
  _It is generally useful for testing the application components in the way the
  user would use it_.

- Add two tests to verify that the `OrderView` renders correctly when the order
  contains no items vs. one or more items.

- Add a test to make sure that the delete button on order items deletes the item
  from the order.

- Write a Storybook story to show your `OrderView` component. Set up the
  `OrderContext` to show a few orders.

That's it for part 3. You are done! Go celebrate!
