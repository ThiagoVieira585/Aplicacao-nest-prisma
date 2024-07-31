// eslint-disable-next-line prettier/prettier
import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherDto } from './dto/father.dto';

@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}

  @Post()
  async create(@Body() data: FatherDto) {
    return await this.fatherService.create(data);
  }
  @Get()
  async findAll() {
    return await this.fatherService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: FatherDto) {
    return this.fatherService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.fatherService.delete(id);
  }
}
