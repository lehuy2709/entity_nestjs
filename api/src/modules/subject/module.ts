import { Module } from '@nestjs/common';
import { SubjectController } from './controller';
import { SubjectService } from "./services";
import { DataSource } from 'typeorm';
import {SubjectServiceToken, DATA_SOURCE} from "../../shares";
import { SubjectEntity } from "./entities";
import {DatabaseModule} from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectController],
  providers: [
    {
      provide: 'SubjectEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(SubjectEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: SubjectServiceToken,
      useClass: SubjectService
    }
  ],
})
export class SubjectModule {}