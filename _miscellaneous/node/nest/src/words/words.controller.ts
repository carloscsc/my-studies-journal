import { Controller, Get } from '@nestjs/common';

@Controller('words')
export class WordsController {
  @Get()
  getHello(): string {
    return 'Words home';
  }

  @Get('all')
  getall(): string {
    return 'All words should be here';
  }
}
