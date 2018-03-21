import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {LexemeController} from "./lexeme.controller";

@Module({
  imports: [],
  controllers: [AppController, LexemeController],
  components: [],
})
export class ApplicationModule {}
