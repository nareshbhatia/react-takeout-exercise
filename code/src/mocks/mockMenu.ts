import { Menu, MenuItem, MenuSection } from '../models';

const items: { [itemId: string]: MenuItem } = {
  'avocado-and-lime-bowl': {
    id: 'avocado-and-lime-bowl',
    name: 'Avocado and Lime Bowl',
    description:
      'Greens, avocado, black bean salsa, quinoa, cherry tomatoes, cheddar cheese, lime wedge',
    price: 8.95,
  },
  'avocado-toast': {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description:
      'Avocado toast served on country bread, served with a side of veggies',
    price: 8.95,
  },
  'baked-sweet-potato-fries': {
    id: 'baked-sweet-potato-fries',
    name: 'Baked Sweet Potato Fries',
    description: 'Baked sweet potato fries, served with ketchup and fry sauce',
    price: 5.95,
  },
  'four-cheese-pasta': {
    id: 'four-cheese-pasta',
    name: 'Four Cheese Pasta',
    description:
      'Penne pasta, mozzarella, ricotta, romano and parmesan cheeses, marinara sauce and fresh basil',
    price: 12.95,
  },
  'fresh-strawberry-cheesecake': {
    id: 'fresh-strawberry-cheesecake',
    name: 'Fresh Strawberry Cheesecake',
    description: 'Creamy cheesecake topped with glazed fresh strawberries',
    price: 8.95,
  },
  'guacamole-and-chips': {
    id: 'guacamole-and-chips',
    name: 'Guacamole and Chips',
    description:
      'Avocado, onion, fresh lime and cilantro, served with tortilla chips, salsa and sour cream',
    price: 7.95,
  },
  'hot-fudge-sundae': {
    id: 'hot-fudge-sundae',
    name: 'Hot Fudge Sundae',
    description: 'Hot fudge topped with whipped cream and almonds',
    price: 6.95,
  },
  'margherita-pizza': {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description:
      'Fresh mozzarella, house-made tomato sauce, pecorino romano & fresh basil pizza',
    price: 12.95,
  },
  'roasted-portabella-salad': {
    id: 'roasted-portabella-salad',
    name: 'Roasted Portabella Salad',
    description:
      'Glazed balsamic portabella mushroom, red onion, arugula and shaved parmesan',
    price: 6.95,
  },
  'spinach-and-mushroom-pizza': {
    id: 'spinach-and-mushroom-pizza',
    name: 'Spinach and Mushroom Pizza',
    description:
      'Flatbread pizza topped with mozzarella & parmesan cheeses, spinach and mushrooms',
    price: 12.95,
  },
  tiramisu: {
    id: 'tiramisu',
    name: 'Tiramisu',
    description:
      'Italian custard made with mascarpone, whipped cream and lady fingers',
    price: 9.95,
  },
  'vegetable-penne-pasta': {
    id: 'vegetable-penne-pasta',
    name: 'Vegetable Penne Pasta',
    description:
      'Parmesan, olives, summer squash, broccoli, roasted peppers with penne tossed in light olive oil',
    price: 12.95,
  },
};

const sections: { [sectionId: string]: MenuSection } = {
  appetizers: {
    id: 'appetizers',
    name: 'Appetizers',
    itemIds: [
      'baked-sweet-potato-fries',
      'guacamole-and-chips',
      'avocado-toast',
    ],
  },
  desserts: {
    id: 'desserts',
    name: 'Desserts',
    itemIds: ['fresh-strawberry-cheesecake', 'tiramisu', 'hot-fudge-sundae'],
  },
  pastas: {
    id: 'pastas',
    name: 'Pastas',
    itemIds: ['four-cheese-pasta', 'vegetable-penne-pasta'],
  },
  pizzas: {
    id: 'pizzas',
    name: 'Pizzas',
    itemIds: ['margherita-pizza', 'spinach-and-mushroom-pizza'],
  },
  salads: {
    id: 'salads',
    name: 'Salads',
    itemIds: ['avocado-and-lime-bowl', 'roasted-portabella-salad'],
  },
};

export const menu: Menu = {
  items,
  sections,
  sectionIds: ['appetizers', 'salads', 'pizzas', 'pastas', 'desserts'],
};
