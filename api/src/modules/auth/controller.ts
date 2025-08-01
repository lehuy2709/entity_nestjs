import { Controller, Post, Body, Inject } from '@nestjs/common';
import { LoginReq,RegisterReq } from './dtos';
import { UserServiceI } from '../../shares';
import { UserServiceToken } from '../../shares';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(UserServiceToken)
    private readonly userService: UserServiceI,
  ) {}

  @Post('login')
  login(@Body() loginReq: LoginReq) {
    return this.userService.login(loginReq);
  }

  @Post('register')
  register(@Body() registerReq: RegisterReq) {
    return this.userService.register(registerReq);
  }
}
