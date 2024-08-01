import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { FatherDto } from './dto/father.dto';

@Injectable()
export class FatherService {
  constructor(private prisma: PrismaService) {}
  async create(data: FatherDto) {
    if (!data.name || !data.email || !data.phone) {
      throw new BadRequestException('Missing required fields');
    }
    const fatherExists = await this.prisma.father.findFirst({
      where: {
        email: data.email,
      },
    });

    if (fatherExists) {
      throw new ConflictException('This email is already');
    }
    const phoneExists = await this.prisma.father.findFirst({
      where: {
        phone: data.phone,
      },
    });
    if (phoneExists) {
      throw new ConflictException('This phone is already');
    }

    const father = await this.prisma.father.create({
      data,
    });
    return father;
  }
  async findAll() {
    return this.prisma.father.findMany({
      include: {
        children: true,
      },
    });
  }
  async update(id: string, data: FatherDto) {
    const fatherExists = await this.prisma.father.findUnique({
      where: {
        id,
      },
    });

    if (!fatherExists) {
      throw new NotFoundException('Father does not exists!');
    }
    const phoneExists = await this.prisma.father.findFirst({
      where: {
        phone: data.phone,
      },
    });
    if (phoneExists) {
      throw new ConflictException('This phone is already');
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
      include: {
        children: true,
      },
    });

    if (!fatherExists) {
      throw new NotFoundException('Father does not exists!');
    }
    if (fatherExists.children.length > 0) {
      throw new ConflictException('Cannot delete father with children');
    }
    return await this.prisma.father.delete({
      where: {
        id,
      },
    });
  }
}
