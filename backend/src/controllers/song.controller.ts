import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { SongService } from '../services/song.service';
import { Song } from '../entities/song.entity';

@Controller('songs')
export class SongController {
    constructor(private readonly songService: SongService) {}

    @Get()
    async getAllSongs(): Promise<Song[]> {
        return this.songService.findAll();
    }
    @Get()
    async getAllSongsOrderByBand(): Promise<Song[]> {
        return this.songService.findAllOrderdByBand();
    }
    @Get(':bandName')
    async getAllSongsByBand(@Param('bandName') bandName: string): Promise<Song[]> {
        return this.songService.findSongsByBand(bandName);
    }
    @Get(':year')
    async getAllSongsByYear(@Param('year') year: number): Promise<Song[]> {
        return this.songService.findSongsByYear(year);
    }
    @Get()
    async getSpecificSong(@Body() song: Partial<Song>): Promise<Song[]> {
        return this.songService.findSpecificSong(song.songName, song.band);
    }

    @Post()
    async addSong(@Body() song: Song): Promise<Song> {
        return this.songService.addSong(song);
    }

    @Delete()
    async deleteSong(@Body() song: Partial<Song>): Promise<void> {
        return this.songService.deleteSongByNameAndBand(song.songName, song.band);
    }
}
