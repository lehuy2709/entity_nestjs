import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  UserServiceI,
  UserEntityRepository,
  UserReqI,
  UserI,
  LoginResI,
} from '../../shares';
import { BaseService } from '../base/services';
import { UserEntity } from './entities';
import { LoginReq } from '../auth/dtos';
import { createHash } from 'crypto';
import { sign } from 'jsonwebtoken';

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
    return super.getPublicColumns().filter((c: string) => c !== 'password');
  }

  async register(data: UserReqI) {
    const users: UserI[] = await this.find({ email: data.email });

    if (users.length > 0) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const hashedPassword = createHash('sha256')
      .update(data.password)
      .digest('hex');

    const user = {
      ...data,
      password: hashedPassword,
      role: 'student', 
      status: 'active',
      parent_name : 'empty',
      parent_phone : 'none'
    };

    return await this.create(user); 
  }

  async login(data: LoginReq): Promise<LoginResI> {
    const hashedPassword = createHash('sha256')
      .update(data.password)
      .digest('hex');

    const users: UserI[] = await this.find({
      email: data.email,
      password: hashedPassword,
    });

    if (users.length === 0) {
      throw new HttpException(
        'Wrong email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const user: UserI = users[0];

    const payload = {
      id: user.id,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 600,
    };
    // @ts-ignore
    const accessToken = sign(payload, process.env.PRIVATE_KEY);
    // @ts-ignore
    const refreshToken = sign({ id: user.id }, process.env.PRIVATE_KEY);

    return {
      accessToken,
      refreshToken,
    };
  }
}
