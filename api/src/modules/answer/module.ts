import { Module } from '@nestjs/common';
import { AnswerController } from './controller';
import { AnswerService } from './services';

@Module({
  imports: [],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}