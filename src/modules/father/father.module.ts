import { Module } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherController } from './father.controller';

@Module({
  controllers: [FatherController],
  providers: [FatherService],
})
export class FatherModule {}
