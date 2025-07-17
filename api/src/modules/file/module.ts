import { Module } from '@nestjs/common';
import { FileController } from './controller';
import { FileService } from './services';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}