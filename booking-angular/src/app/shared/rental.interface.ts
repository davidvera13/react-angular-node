
export interface IRental {
  someData: string;
  isLoaded: boolean;

  implementMe(): string;
}

// generic
export class AppStorage<T> {
  // @ts-ignore
  items: T[] = [];

  addItem(item: T): T {
    this.items.push(item);
    return item;
  }

  getItem(index: number): T {
    return this.items[index];
  }
  getItems(): T[] {
    return this.items.map(item => {
      console.log(item);
      return item;
    });
  }
}
