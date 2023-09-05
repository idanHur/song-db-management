import { Controller} from '@nestjs/common';
import { SongService } from '../services/song.service';
import { Song } from '../entities/song.entity';

@Controller('songs')
export class SongController {
    constructor(private readonly songService: SongService) {}

}
