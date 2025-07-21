import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamGroupServiceI, DATA_SOURCE} from "../../shares";
import {ExamGroupsEntity} from "./entities";
import {BaseService} from "../base/services";

@Injectable()
export class ExamGroupService extends BaseService<ExamGroupsEntity> implements ExamGroupServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ExamGroupEntityRepository')
      protected repository: Repository<ExamGroupsEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('examGroup')
        .select([
          'id', 'name', 'start_time', 'await_time', 'is_once', 'is_save_local', 'class_id'
        ])
  }
}