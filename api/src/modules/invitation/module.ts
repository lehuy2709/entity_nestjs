import { Module } from '@nestjs/common';
import { InvitationService } from './services';
import { InvitationController } from './controller';
import { InvitationServiceToken } from '../../shares';
import { UserModule } from '../user/module';
import { ClassUserModule } from '../class_user/module';
import { ClassModule } from '../class/module';

@Module({
  imports: [ClassUserModule, ClassModule, UserModule],
  controllers: [InvitationController],
  providers: [
    {
      provide: InvitationServiceToken,
      useClass: InvitationService,
    },
  ],
})
export class InvitationModule {}
