import { Module } from '@nestjs/common';
import { ExamController } from './controller';
import { ExamService } from './services';

@Module({
  imports: [],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}