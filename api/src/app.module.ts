import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './modules/teacher/module';
import { DatabaseModule } from './database/module';
import { ClassModule } from './modules/class/module';
import { SubjectModule } from './modules/subject/module';
import { AnswerModule } from './modules/answer/module';
import { ClassUserModule } from './modules/class_user/module';
import { ExamGroupModule } from './modules/exam_group/module';
import { ExamResultModule } from './modules/exam_result/module';
import { FileModule } from './modules/file/module';
import { JobModule } from './modules/job/module';
import { QuestionModule } from './modules/question/module';
import { TopicController } from './modules/topic/controller';
import { TopicModule } from './modules/topic/module';
import { UserModule } from './modules/user/module';
import { StudentModule } from './modules/student/module';
import { ImageModule } from './modules/image/module';
import { AuthModule } from './modules/auth/module';

@Module({
  imports: [
    TeacherModule,
    DatabaseModule,
    ClassModule,
    SubjectModule,
    AnswerModule,
    ClassUserModule,
    ExamGroupModule,
    ExamResultModule,
    FileModule,
    JobModule,
    QuestionModule,
    TopicModule,
    UserModule,
    StudentModule,
    ImageModule,
    AuthModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
