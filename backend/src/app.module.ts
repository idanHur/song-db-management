import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongController } from './controllers/song.controller';
import { SongService } from './services/song.service';
import { Song } from './entities/song.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database', // Name of the service in docker-compose.yml
      port: 3306,
      username: 'user', 
      password: 'password',
      database: 'songdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Song])  // This is for dependency injection of the Song entity's repository.
  ],
  controllers: [AppController, SongController],
  providers: [AppService, SongService],
})
export class AppModule {}
