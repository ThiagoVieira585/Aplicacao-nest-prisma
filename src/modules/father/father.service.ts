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
  async findAll() {
    return this.prisma.father.findMany();
  }
  async update(id: string, data: FatherDto) {
    const fatherExists = await this.prisma.father.findUnique({
      where: {
        id,
      },
    });

    if (!fatherExists) {
      throw new Error('Father not exists!');
    }
    return await this.prisma.father.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const fatherExists = await this.prisma.father.findUnique({
      where: {
        id,
      },
    });

    if (!fatherExists) {
      throw new Error('Father does not exists!');
    }
    return await this.prisma.father.delete({
      where: {
        id,
      },
    });
  }
}
