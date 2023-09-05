import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from '../entities/song.entity';

@Injectable()
export class SongService {
    constructor(
        @InjectRepository(Song)
          /* songRepository is the instance of the 
             Repository to handle DB operations for the Song entity. */
        private songRepository: Repository<Song>,
      ) {}

      async findAll(): Promise<Song[]> {
        return await this.songRepository.find();
      }
      async findAllByBand(): Promise<Song[]> {
        return await this.songRepository.find({ order: { band: 'ASC' } }); // Get the songs ordered by the Band name.
      }

      async addSong(song: Song): Promise<Song> {
        return await this.songRepository.save(song);
      }
  }