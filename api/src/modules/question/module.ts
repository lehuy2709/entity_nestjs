import { Module } from '@nestjs/common';
import { QuestionController } from './controller';
import { QuestionService } from './services';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}