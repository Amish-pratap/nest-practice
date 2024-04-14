import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @AfterInsert()
  logInsert() {
    console.log('user inserted', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('user updated', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('user removed', this.id);
  }
}
