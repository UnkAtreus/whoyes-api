import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '12345678',
          database: 'WhoYes',
          entities: [User],
          synchronize: true,
        }
      }
    }),
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
