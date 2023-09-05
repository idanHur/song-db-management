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
        return await this.songRepository.find({ 
            order: { band: 'ASC' } // Get the songs ordered by the Band name.
        }); 
      }
      async findSongsByBand(bandName: string): Promise<Song[]> {
        return await this.songRepository.find({ 
            where : { band: bandName},// Get All the songs of this band
            order: { year: 'ASC' } // Order by the year.
        }); 
      }
      async findSongsByYear(year: number): Promise<Song[]> {
        return await this.songRepository.find({ 
            where : { year: year},// Get All the songs from the same year that was passed
            order: { band: 'ASC' } // Ordered by the Band name.
        }); 
      }
      async findSpecificSong(songName: string, bandName: string): Promise<Song[]> {
        return await this.songRepository.find({ 
            where : { 
                songName: songName, 
                band: bandName 
            }
        }); 
      }
      async addSong(song: Song): Promise<Song> {
        return await this.songRepository.save(song);
      }
      async deleteSongByNameAndBand(songName: string, bandName: string): Promise<void> {
        await this.songRepository.delete({ 
            songName: songName, 
            band: bandName 
        });
      }
      
  }