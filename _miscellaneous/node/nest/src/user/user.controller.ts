import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  home(): string {
    return 'Hello User!';
  }
}
