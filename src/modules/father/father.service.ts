import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { FatherDto } from './dto/father.dto';

@Injectable()
export class FatherService {
  constructor(private prisma: PrismaService) {}
  async create(data: FatherDto) {
    const fatherExists = await this.prisma.father.findFirst({
      where: {
        email: data.email,
      },
    });

    if (fatherExists) {
      throw new Error('Father already exists');
    }
    const father = await this.prisma.father.create({
      data,
    });
    return father;
  }
}
