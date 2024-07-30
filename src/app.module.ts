import { Module } from '@nestjs/common';
import { FatherModule } from './modules/father/father.module';

@Module({
  imports: [FatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
