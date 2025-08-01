import { AnswerEntity } from 'src/modules/answer/entities';
import { ClassEntity } from 'src/modules/class/entities';
import { ClassUsersEntity } from 'src/modules/class_user/entities';
import { ExamEntity } from 'src/modules/exam/entities';
import { ExamGroupsEntity } from 'src/modules/exam_group/entities';
import { ExamResultEntity } from 'src/modules/exam_result/entities';
import { FileEntity } from 'src/modules/file/entities';
import { ImageEntity } from 'src/modules/image/entities';
import { JobEntity } from 'src/modules/job/entities';
import { QuestionEntity } from 'src/modules/question/entities';
import { SubjectEntity } from 'src/modules/subject/entities';
import { TopicEntity } from 'src/modules/topic/entities';
import { UserEntity } from 'src/modules/user/entities';
import { DATA_SOURCE } from 'src/shares/';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
          UserEntity,
          ClassEntity,
          SubjectEntity,
          ClassUsersEntity,
          ExamGroupsEntity,
          ExamEntity,
          QuestionEntity,
          AnswerEntity,
          ExamResultEntity,
          TopicEntity,
          FileEntity,
          JobEntity,
          ImageEntity
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
