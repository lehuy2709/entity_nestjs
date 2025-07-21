import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {AnswerEntity} from "./entities";
import {BaseService} from "../base/services";
import { AnswerServiceI } from "src/shares/type/services";

@Injectable()
export class AnswerService extends BaseService<AnswerEntity> implements AnswerServiceI {

  constructor(
      @Inject('AnswerEntityRepository')
      protected repository: Repository<AnswerEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('answer')
        .select([
          'id', 'answer', 'is_correct', 'exam_result_id', 'question_id'
        ])
  }
}