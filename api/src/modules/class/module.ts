import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/module';
import { ClassService } from './services';
import { ClassController } from './controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}