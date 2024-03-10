import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UsersController } from '../users/controller/users.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityes from '../entities';
import { AuthModule } from 'src/auth/auth.module';
import { authController } from 'src/auth/controller/auth.controller';
import { authService } from 'src/auth/service/auth.service';




@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'roman',
    password: 'password',
    database: 'roman',
    entities: entityes,
    autoLoadEntities: true,
  })],
  controllers: [AppController, UsersController, authController],
  providers: [AppService, UsersService, authService],
})
export class AppModule {}
