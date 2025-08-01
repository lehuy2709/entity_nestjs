import { v2 as cloudinary } from 'cloudinary';
import {CLOUDINARY} from "../../shares";
import { Provider } from '@nestjs/common';

export const CloudinaryProvider  = {
  provide: CLOUDINARY,
  useFactory: () => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    return cloudinary;
  },
};