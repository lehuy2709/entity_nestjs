import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { ImageService } from './services';
import { ImageServiceToken } from '../../shares';

@ApiTags('Image')
@Controller('images')
export class ImageController {
  constructor(
    @Inject(ImageServiceToken)
    private readonly imageService: ImageService
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.imageService.uploadImage(file);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.softDelete(id);
  }
}
