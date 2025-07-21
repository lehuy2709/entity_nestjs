import {Column, Entity} from "typeorm";
import { BaseEntity } from "../base/entities";

@Entity('classUser')
export class ClassUsersEntity extends BaseEntity{
  @Column()
  class_id: number;

  @Column()
  user_id: number;
}