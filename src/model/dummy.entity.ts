import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dummy {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
