import { Module } from '@nestjs/common';
import { MatchUserController } from './match-user.controller';
import { MatchUserService } from './match-user.service';

@Module({
  controllers: [MatchUserController],
  providers: [MatchUserService]
})
export class MatchUserModule {}
