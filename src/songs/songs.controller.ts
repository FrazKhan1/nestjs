import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'New Song created';
  }
  @Get()
  findAll() {
    return 'All Songs';
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
