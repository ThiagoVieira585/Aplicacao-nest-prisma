import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { FatherModule } from './modules/father/father.module';

@Module({
  imports: [ModulesModule, FatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
