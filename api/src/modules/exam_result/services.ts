import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamResultServiceI, DATA_SOURCE} from "../../shares";
import {ExamResultEntity} from "./entities";
import {BaseService} from "../base/services";

@Injectable()
export class ExamResultService extends BaseService<ExamResultEntity> implements ExamResultServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ExamResultEntityRepository')
      protected repository: Repository<ExamResultEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('examResult')
        .select([
          'id', 'status', 'answers', 'number_of_correct_answer', 'score', 'user_id', 'exam_id'
        ])
  }
}