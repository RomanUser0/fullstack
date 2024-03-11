import { Module } from '@nestjs/common';
import { authController } from './controller/auth.controller';
import { authService } from './service/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';


@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule.register({
    secret: 'abc123',
    signOptions: {expiresIn: '1h'},
  })],
  controllers: [authController],
  providers: [authService],
  exports: [TypeOrmModule.forFeature([User]), JwtService],
})
export class AuthModule {}
