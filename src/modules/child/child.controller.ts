// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildDto } from './dto/child.dto';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post(':fatherId')
  create(@Param('fatherId') fatherId: string, @Body() data: ChildDto) {
    return this.childService.create(fatherId, data);
  }

  @Get()
  async findAll() {
    return this.childService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ChildDto) {
    return this.childService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.childService.delete(id);
  }
}
