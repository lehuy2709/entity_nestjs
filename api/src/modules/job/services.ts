import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {JobServiceI, DATA_SOURCE} from "../../shares";
import {JobEntity} from "./entities";
import {BaseService} from "../base/services";

@Injectable()
export class JobService extends BaseService<JobEntity> implements JobServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('JobEntityRepository')
      protected repository: Repository<JobEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('job')
        .select([
          'id', 'name'
        ])
  }
}