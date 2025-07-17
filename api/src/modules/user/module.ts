import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UserService } from './services';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}