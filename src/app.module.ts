import { Module } from '@nestjs/common';
import { FatherModule } from './modules/father/father.module';
import { ChildModule } from './modules/child/child.module';

@Module({
  imports: [FatherModule, ChildModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
