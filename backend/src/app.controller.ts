import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FibonacciValues } from './app.entity';

@Controller('fibonacci')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/calculate')
  async calculate(@Body() authRegister: any): Promise<number> {
    return await this.appService.calculateFibbNormal(authRegister.index);
  }

  @Post('/calculateRecursive')
  async calculateRecursive(@Body() authRegister: any): Promise<number> {
    return await this.appService.calculateFibRecursive(authRegister.index);
  }

  @Get('/getAll')
  async getAll(): Promise<FibonacciValues[]> {
    return await this.appService.getAllFibonacciValues();
  }
}
