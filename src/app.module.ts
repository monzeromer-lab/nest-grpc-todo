import { Module } from '@nestjs/common';
import { TodoController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [AppService],
})
export class AppModule {}
