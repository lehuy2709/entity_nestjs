import { Module } from '@nestjs/common';
import { ExamGroupController } from './controller';
import { ExamGroupService } from './services';

@Module({
  imports: [],
  controllers: [ExamGroupController],
  providers: [ExamGroupService],
})
export class ExamGroupModule {}