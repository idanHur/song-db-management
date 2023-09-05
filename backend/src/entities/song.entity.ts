import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

@Entity()
@Unique(["songName", "band", "year"])
export class Song {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  songName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  band: string;
  
  @Column()
  @IsInt()
  @Min(1900)  // Minimum year constraint
  @Max(new Date().getFullYear())  // Maximum year constraint
  year: number;
}