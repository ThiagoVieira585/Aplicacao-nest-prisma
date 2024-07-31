// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildDto } from './dto/child.dto';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  create(@Body() data: ChildDto) {
    return this.childService.create(data);
  }

  @Get()
  findAll() {
    return this.childService.findAll();
  }
}
