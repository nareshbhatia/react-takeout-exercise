export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface MenuSection {
  id: string;
  name: string;
  itemIds: Array<string>;
}

export interface Menu {
  items: { [itemId: string]: MenuItem };
  sections: { [sectionId: string]: MenuSection };
  sectionIds: Array<string>;
}
