import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/entities';

@Entity('subject')
export class SubjectEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  code: string;
}