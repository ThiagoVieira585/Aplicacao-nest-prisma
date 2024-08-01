import { Injectable } from '@nestjs/common';
import { ChildDto } from './dto/child.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ChildService {
  constructor(private prisma: PrismaService) {}
  async create(fatherId: string, data: ChildDto) {
    const child = await this.prisma.child.create({
      data: {
        ...data,
        fatherId,
      },
    });
    return child;
  }

  findAll() {
    return this.prisma.child.findMany({
      include: {
        father: true,
      },
    });
  }
  async update(id: string, data: ChildDto) {
    const childExists = await this.prisma.child.findUnique({
      where: { id },
    });

    if (!childExists) {
      throw new Error('Child not found');
    }

    return await this.prisma.child.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    const childExists = await this.prisma.child.findUnique({
      where: { id },
    });

    if (!childExists) {
      throw new Error('Child not found');
    }

    return await this.prisma.child.delete({
      where: { id },
    });
  }
}
