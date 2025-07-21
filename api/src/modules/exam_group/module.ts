import { Module } from '@nestjs/common';
import { ExamGroupController } from './controller';
import { ExamGroupService } from "./services";
import { DataSource } from 'typeorm';
import {ExamGroupServiceToken, DATA_SOURCE} from "../../shares";
import { ExamGroupsEntity } from "./entities";
import {DatabaseModule} from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamGroupController],
  providers: [
    {
      provide: 'ExamGroupEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ExamGroupsEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ExamGroupServiceToken,
      useClass: ExamGroupService
    }
  ],
})
export class ExamGroupModule {}