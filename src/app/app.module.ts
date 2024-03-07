import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersController } from '../users/controller/users.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityes from '../entities';
import { ConfigModule } from '@nestjs/config';
import configurations from '../configurations';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true, load: [configurations]}), UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'roman',
    password: 'password',
    database: 'roman',
    entities: entityes,
    autoLoadEntities: true,
  })],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
