import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(["songName", "band", "year"])
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  songName: string;

  @Column()
  band: string;
  
  @Column()
  year: number;
}