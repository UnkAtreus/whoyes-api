import { Module } from '@nestjs/common';
import { SexTypeController } from './sex-type.controller';
import { SexTypeService } from './sex-type.service';

@Module({
  controllers: [SexTypeController],
  providers: [SexTypeService]
})
export class SexTypeModule {}
