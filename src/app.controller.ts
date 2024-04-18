import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('menu')
  getMenu() {
    return this.appService.getHello();
  }

  @Get('menu/:id')
  getMenuItem(@Param('id') id: string){
    return this.appService.getMenuItem(id);
  }

  @Post('menu')
  addMenuItem(@Body('item') items: string){
    console.log(items)
    return this.appService.addMenuItem(items);
  }

}
