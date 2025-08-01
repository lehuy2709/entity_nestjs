import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {BaseService} from "../../modules/base/services";
import { ClassUserEntityRepository } from '../../shares';
import { ClassUsersEntity } from './entities';

@Injectable()
export class ClassUserService extends BaseService<ClassUsersEntity> {
  constructor(
    @Inject(ClassUserEntityRepository)
    protected repository: Repository<ClassUsersEntity>,
  ) {
    super(repository);
  }
}