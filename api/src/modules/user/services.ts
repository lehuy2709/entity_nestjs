import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserServiceI, UserEntityRepository } from '../../shares';
import { BaseService } from '../base/services';
import { UserEntity } from './entities';

@Injectable()
export class UserService
  extends BaseService<UserEntity>
  implements UserServiceI
{
  constructor(
    @Inject(UserEntityRepository)
    protected repository: Repository<UserEntity>,
  ) {
    super(repository);
  }

  protected getPublicColumns(): string[] {
    return super.getPublicColumns().filter((c: string) => c != 'password');
  }
}