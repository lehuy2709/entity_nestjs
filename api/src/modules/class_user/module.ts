import { Module } from '@nestjs/common';
import { ClassUserController } from './controller';
import { ClassUserService } from "./services";
import { DataSource } from 'typeorm';
import {ClassUserServiceToken, DATA_SOURCE} from "../../shares";
import { ClassUsersEntity } from "./entities";
import {DatabaseModule} from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassUserController],
  providers: [
    {
      provide: 'ClassUsersEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassUsersEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ClassUserServiceToken,
      useClass: ClassUserService
    }
  ],
})
export class ClassUserModule {}