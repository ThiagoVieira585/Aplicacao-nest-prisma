import { Module } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherController } from './father.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FatherController],
  providers: [FatherService, PrismaService],
})
export class FatherModule {}
