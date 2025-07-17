import { Module } from '@nestjs/common';
import { JobController } from './controller';
import { JobService } from './services';

@Module({
  imports: [],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}