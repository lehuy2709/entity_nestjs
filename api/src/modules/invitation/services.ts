import { Inject, Injectable } from '@nestjs/common';
import { InvitationServiceI, InvitationI } from '../../shares';
import { ClassUserServiceToken, UserServiceToken } from '../../shares';
import { ClassUserService } from '../class_user/services';
import { UserService } from '../user/services';

@Injectable()
export class InvitationService implements InvitationServiceI {
  constructor(
    @Inject(ClassUserServiceToken)
    private classUserService: ClassUserService,

    @Inject(UserServiceToken)
    private userService: UserService,
  ) {}

  async invite(invitation: InvitationI) {
    await this.classUserService.create(invitation);
  }
}
