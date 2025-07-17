import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/entities';

@Entity('class')
export class ClassEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  code: string;

  @Column()
  subject_id: number;
}