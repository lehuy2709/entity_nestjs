import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './provider';

@Module({
  providers: [CloudinaryProvider],
  exports: [CloudinaryProvider],
})
export class CloudinaryModule {}
