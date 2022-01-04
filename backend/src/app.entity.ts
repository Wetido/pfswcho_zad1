import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FibonacciValues')
class FibonacciValues {
  @Column({ name: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'index', nullable: true })
  index: string;

  @Column({ name: 'value', nullable: true })
  value: string;

  @Column({ name: 'dateTime', nullable: true })
  dateTime: string;
}

export { FibonacciValues };
