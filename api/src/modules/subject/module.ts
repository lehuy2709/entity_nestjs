import { Module } from '@nestjs/common';
import { SubjectService } from './services';
import { DatabaseModule } from 'src/database/module';
import { SubjectController } from './controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}