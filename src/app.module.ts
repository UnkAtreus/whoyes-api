import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { MatchUserModule } from './match-user/match-user.module';
import { SexTypeModule } from './sex-type/sex-type.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          type: 'postgres',
          host: 'localhost', //whoyes-api_db_1
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
    PostModule,
    CommentModule,
    LikeModule,
    MatchUserModule,
    SexTypeModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
