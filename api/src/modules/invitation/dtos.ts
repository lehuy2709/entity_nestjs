import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { InvitationI } from '../../shares';

export class InvitationReq implements InvitationI {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    example: 2,
  })
  @IsNumber()
  classId: number;

  @ApiProperty({
    example: 'classex213',
  })
  @IsString()
  code: string;
}
