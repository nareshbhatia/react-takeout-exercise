export interface OrderItem {
  menuItemId: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  items: Array<OrderItem>;
}
