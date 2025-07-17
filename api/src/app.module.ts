import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './modules/teacher/module';
import { DatabaseModule } from './database/module';
import { ClassModule } from './modules/class/module';
import { SubjectModule } from './modules/subject/module';

@Module({
  imports: [TeacherModule,DatabaseModule,ClassModule,SubjectModule,ClassModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
