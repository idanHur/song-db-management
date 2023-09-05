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

  }