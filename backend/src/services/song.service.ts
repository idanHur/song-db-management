import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from '../entities/song.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class SongService implements OnModuleInit {
    constructor(
        @InjectRepository(Song)
          /* songRepository is the instance of the 
             Repository to handle DB operations for the Song entity. */
        private songRepository: Repository<Song>,
      ) {}
    onModuleInit() {
    // This method will be called once the module's dependencies are resolved
    this.processCSV('../../../Song_list.csv');
    }

    async processCSV(filePath: string): Promise<void> {
        const readStream = fs.createReadStream(filePath);
        // Handle readStream errors
        readStream.on('error', (err) => {
            console.error('An error occurred while reading the file:', err.message);
            return;
        });

        readStream.pipe(csv())
            .on('data', async (row) => {
                if (!this.validateRowData(row)) return;

                const song = {
                    songName: row["Song Name"].toLowerCase(),
                    band: row.Band.toLowerCase(),
                    year: Number(row.Year) 
                };

                if (await this.isSongInRepository(song)) {
                    console.warn(`Song already exists: ${song.songName} by ${song.band}`);
                    return;
                }

                await this.saveSongToRepository(song);
            })
            .on('end', () => {
            console.log('CSV file successfully processed');
            });
    }
    
    private validateRowData(row: any): boolean {
        if (!row["Song Name"] || !row.Band || !row.Year) {
            console.warn('Missing value in row', row);
            return false;
        }
    
        const year = Number(row.Year);
        if (isNaN(year)) {
            console.warn('Invalid year value in row', row);
            return false;
        }
        return true;
    }
    
    private async isSongInRepository(song: Song): Promise<boolean> {
        const existingSong = await this.songRepository.findOne({
            where: {
                songName: song.songName,
                band: song.band,
                year: song.year
            }
        });
        return !!existingSong;
    }
    
    private async saveSongToRepository(song: Song): Promise<void> {
        try {
            await this.songRepository.save(song);
        } catch(error) {
            console.error(`Error saving song: ${song.songName} by ${song.band}. Error: ${error.message}`);
        }
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