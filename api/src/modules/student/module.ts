import { Module } from '@nestjs/common';
import { StudentController } from './controller';
import {StudentService} from "./services";
import {StudentServiceToken} from "../../shares";
import { UserModule } from '../user/module';

@Module({
  imports: [UserModule],
  controllers: [StudentController],
  providers: [
    {
      provide: StudentServiceToken,
      useClass: StudentService
    }
  ],
  exports: [StudentServiceToken]
})
export class StudentModule {}