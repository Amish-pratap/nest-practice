import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

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
