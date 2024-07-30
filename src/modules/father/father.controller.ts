import { Body, Controller, Post } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherDto } from './dto/father.dto';

@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}

  @Post()
  async create(@Body() data: FatherDto) {
    return await this.fatherService.create(data);
  }
}
