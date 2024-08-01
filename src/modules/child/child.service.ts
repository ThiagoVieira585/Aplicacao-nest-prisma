import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ChildDto } from './dto/child.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ChildService {
  constructor(private prisma: PrismaService) {}
  async create(fatherId: string, data: ChildDto) {
    if (!data.name || !data.age || !fatherId) {
      throw new BadRequestException('Missing required fields');
    }
    if (data.age < 0) {
      throw new BadRequestException('Age cannot be less than 0');
    }
    const fatherExists = await this.prisma.father.findUnique({
      where: { id: fatherId },
    });

    if (!fatherExists) {
      throw new NotFoundException('Father does not exist');
    }
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
      throw new NotFoundException('Child not found');
    }
    if (data.age < 0) {
      throw new Error('Age cannot be less than 0');
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
      throw new NotFoundException('Child does not exist');
    }

    return await this.prisma.child.delete({
      where: { id },
    });
  }
}
