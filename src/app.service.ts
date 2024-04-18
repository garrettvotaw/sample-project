import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private menu: string[] = [];

  getHello() {
    return this.menu;
  }

  addMenuItem(items: string) {
    if (this.menu.includes(items)) {
      return this.menu;
    }
    this.menu.push(items);
    return this.menu;
  }

  getMenuItem(item: string) {
    return this.menu.find((menuItem) => menuItem === item);
  }
}
