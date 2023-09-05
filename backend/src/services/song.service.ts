import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from '../entities/song.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class SongService {
    constructor(
        @InjectRepository(Song)
          /* songRepository is the instance of the 
             Repository to handle DB operations for the Song entity. */
        private songRepository: Repository<Song>,
      ) {}
      
      async processCSV(filePath: string): Promise<void> {
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(csv())
          .on('data', async (row) => {
            // Check if values exist in the row, if not, skip or handle accordingly
            if (!row["Song Name"] || !row.Band || !row.Year) {
                console.warn('Missing value in row', row);
                return; // Skip this row
            }

            // Take the value from each column and attach it to to appropriate property
            // Also convert song details to lowercase
            const song = {
              songName: row["Song Name"].toLowerCase(),
              band: row.Band.toLowerCase(),
              year: Number(row.Year) 
            };

            // Check 'year' to ensure it's a valid number
            if (isNaN(song.year)) {
                console.warn('Invalid year value in row', row);
                return; // Skip this row
            }

            try{
                await this.songRepository.save(song);
            }catch(error){
                // If cant save this row log the error and continue to nex row
                console.error(`Error saving song: ${song.songName} by ${song.band}. Error: ${error.message}`);
            }
          })
          .on('end', () => {
            console.log('CSV file successfully processed');
          });
      }

      async findAll(): Promise<Song[]> {
        return await this.songRepository.find();
      }

      async findAllOrderdByBand(): Promise<Song[]> {
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