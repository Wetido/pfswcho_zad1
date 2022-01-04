import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('fibonacci')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/calculate')
  async calculate(@Body() authRegister: any): Promise<number> {
    return await this.appService.getRedisValueByIndex(authRegister.index);
  }
}
