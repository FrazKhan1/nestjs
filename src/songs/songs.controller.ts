import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Post()
  create() {
    return this.songService.create('Fraz');
  }
  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Get(':id')
  findOne() {
    return `Song with ID`;
  }

  @Put(':id')
  update() {
    return `Updated Song with ID`;
  }

  @Delete(':id')
  delete() {
    return `Deleted Song with ID`;
  }
}
