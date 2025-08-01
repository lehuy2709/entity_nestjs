import { Module } from '@nestjs/common';
import { AuthController } from './controller';
import { UserModule } from '../user/module';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
})
export class AuthModule {}
