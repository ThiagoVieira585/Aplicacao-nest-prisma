// eslint-disable-next-line prettier/prettier
import {
  INestApplication,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  enableShutdownHooks(app: INestApplication) {
    process.on('SIGINT', async () => {
      console.log(
        'SIGINT signal received: closing HTTP server and Prisma client.',
      );
      await app.close(); // Close the NestJS application
      await this.$disconnect(); // Disconnect Prisma client
      process.exit(0); // Exit the process
    });

    process.on('SIGTERM', async () => {
      console.log(
        'SIGTERM signal received: closing HTTP server and Prisma client.',
      );
      await app.close(); // Close the NestJS application
      await this.$disconnect(); // Disconnect Prisma client
      process.exit(0); // Exit the process
    });
  }
}
