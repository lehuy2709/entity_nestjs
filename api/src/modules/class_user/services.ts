import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ClassUserServiceI, DATA_SOURCE} from "../../shares";
import {BaseService} from "../../modules/base/services";
import { ClassUsersEntity } from "./entities";

@Injectable()
export class ClassUserService extends BaseService<ClassUsersEntity> implements ClassUserServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ClassUsersEntityRepository')
      protected repository: Repository<ClassUsersEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('classUser')
        .select([
          'id', 'class_id', 'user_id'
        ])
  }
}