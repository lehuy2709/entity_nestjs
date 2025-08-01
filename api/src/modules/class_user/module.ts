import { Module } from '@nestjs/common';
import { ClassUserService } from './services';
import { DatabaseModule } from '../../database/module';
import {
  ClassUserServiceToken,
  ClassUserEntityRepository,
  DATA_SOURCE,
} from '../../shares';
import { DataSource } from 'typeorm';
import { ClassUsersEntity } from './entities';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    {
      provide: ClassUserEntityRepository,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ClassUsersEntity),
      inject: [DATA_SOURCE],
    },
    {
      provide: ClassUserServiceToken,
      useClass: ClassUserService,
    },
  ],
  exports: [ClassUserEntityRepository, ClassUserServiceToken],
})
export class ClassUserModule {}
