import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RedisModule } from './redis/redis.module';
import { FibonacciValues } from './app.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const keys = require('./keys');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: keys.pgHost,
      port: keys.pgPort,
      username: keys.pgUser,
      password: keys.pgPassword,
      database: keys.pgDatabase,
      entities: [join(__dirname, './**/*.entity{.ts,.js}')],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([FibonacciValues]),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
