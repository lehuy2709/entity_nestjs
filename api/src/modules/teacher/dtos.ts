import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TeacherReqI, TeacherResI } from 'src/shares';

// khai bao payload / body
export class TeacherReq implements TeacherReqI {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'user@test.com',
    required: false,
  })
  @IsEmail()
  email: string;
}

// reponse model
export class TeacherRes implements TeacherReqI {
  id: number;
  name: string;
  email: string;
}
