import { Controller, Get, Param} from '@nestjs/common';
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
        return this.songService.findAllOrderByBand();
    }
    @Get(':bandName')
    async getAllSongsByBand(@Param('bandName') bandName: string): Promise<Song[]> {
        return this.songService.findSongsByBand(bandName);
    }
}
