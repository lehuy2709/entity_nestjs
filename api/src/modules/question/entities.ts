import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/entities';

@Entity('question')
export class QuestionEntity extends BaseEntity {
  @Column()
  exam_id: number;

  @Column()
  index: number;

  @Column()
  type: string;

  @Column()
  correct_answer: string;

  @Column()
  topic_id: number;
}