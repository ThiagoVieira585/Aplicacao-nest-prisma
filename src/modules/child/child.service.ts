import { Injectable } from '@nestjs/common';
import { ChildDto } from './dto/child.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ChildService {
  constructor(private prisma: PrismaService) {}
  async create(data: ChildDto) {
    const child = await this.prisma.child.create({
      data,
    });
    return child;
  }

  findAll() {
    return `This action returns all child`;
  }
}
