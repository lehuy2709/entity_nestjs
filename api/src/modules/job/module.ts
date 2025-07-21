import { Module } from '@nestjs/common';
import { JobController } from './controller';
import { JobService } from "./services";
import { DataSource } from 'typeorm';
import {JobServiceToken, DATA_SOURCE} from "../../shares";
import { JobEntity } from "./entities";
import {DatabaseModule} from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [JobController],
  providers: [
    {
      provide: 'JobEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(JobEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: JobServiceToken,
      useClass: JobService
    }
  ],
})
export class JobModule {}