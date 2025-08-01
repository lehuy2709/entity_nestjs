import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ImageEntity } from './entities';
import { CLOUDINARY, ImageEntityRepository } from '../../shares';
import { v2 as CloudinaryType, UploadApiResponse } from 'cloudinary';

@Injectable()
export class ImageService {
  constructor(
    @Inject(CLOUDINARY)
    private cloudinary: typeof CloudinaryType,

    @Inject(ImageEntityRepository)
    private imageRepository: Repository<ImageEntity>
  ) {}

  async uploadImage(file: Express.Multer.File): Promise<ImageEntity> {
    const result: UploadApiResponse = await new Promise((resolve, reject) => {
      const stream = this.cloudinary.uploader.upload_stream(
        { folder: 'uploads' },
        (error, result) => {
          if (error || !result)
            return reject(error || new Error('Upload failed'));
          resolve(result);
        },
      );
      require('streamifier').createReadStream(file.buffer).pipe(stream);
    });

    const autoCropUrl = this.cloudinary.url(result.public_id, {
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
    });

    const image = this.imageRepository.create({
      public_id: result.public_id,
      url: autoCropUrl,
      original_name: file.originalname,
      file_type: file.mimetype,
      size: file.size,
    });

    return this.imageRepository.save(image);
  }

  async findAll(): Promise<ImageEntity[]> {
    return this.imageRepository.find({
      where: { is_deleted: false },
    });
  }

  async findOne(id: number): Promise<ImageEntity> {
    const image = await this.imageRepository.findOne({
      where: { id, is_deleted: false },
    });

    if (!image) {
      throw new NotFoundException(`Image with ID ${id} not found or deleted`);
    }

    return image;
  }

  async softDelete(id: number): Promise<void> {
    await this.imageRepository.update(id, {
      is_deleted: true,
      deleted_at: new Date(),
    });
  }
}
