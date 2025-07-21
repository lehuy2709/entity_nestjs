import { Module } from '@nestjs/common';
import { ExamController } from './controller';
import { ExamService } from './services';
import { DataSource } from 'typeorm';
import { ExamServiceToken, DATA_SOURCE } from '../../shares';
import { ExamEntity } from './entities';
import { DatabaseModule } from '../../database/module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [
    {
      provide: 'ExamEntityRepository',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ExamEntity),
      inject: [DATA_SOURCE],
    },
    {
      provide: ExamServiceToken,
      useClass: ExamService,
    },
  ],
})
export class ExamModule {}
