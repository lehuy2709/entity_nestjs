import { Module } from '@nestjs/common';
import { TopicController } from './controller';
import { TopicService } from './services';

@Module({
  imports: [],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}