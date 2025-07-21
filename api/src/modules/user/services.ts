import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {UserServiceI, DATA_SOURCE} from "../../shares";
import {UserEntity} from "./entities";
import {BaseService} from "../base/services";

@Injectable()
export class UserService extends BaseService<UserEntity> implements UserServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('UserEntityRepository')
      protected repository: Repository<UserEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('user')
        .select([
          'id', 'name', 'email', 'password', 'role', 'status', 'avatar', 'parent_name', 'parent_phone'
        ])
  }
}