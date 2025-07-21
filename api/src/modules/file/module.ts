import { Module } from '@nestjs/common';
import { FileController } from './controller';
import { FileService } from "./services";
import { DataSource } from 'typeorm';
import {FileServiceToken, DATA_SOURCE} from "../../shares";
import { FileEntity } from "./entities";
import {DatabaseModule} from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [
    {
      provide: 'FileEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(FileEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: FileServiceToken,
      useClass: FileService
    }
  ],
})
export class FileModule {}