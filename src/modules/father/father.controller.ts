import { Controller } from '@nestjs/common';
import { FatherService } from './father.service';

@Controller('father')
export class FatherController {
  constructor(private readonly fatherService: FatherService) {}
}
