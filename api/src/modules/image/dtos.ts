import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ImageReqI } from '../../shares';

export class ImageReq {
  @ApiProperty()
  @IsString()
  public_id: string;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  original_name: string;

  @ApiProperty()
  @IsString()
  file_type: string;

  @ApiProperty()
  @IsNumber()
  size: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  deleted_at: Date | null;
}
