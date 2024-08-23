import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [WordsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
