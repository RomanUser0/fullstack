import { Module } from '@nestjs/common';
import { authController } from './controller/auth.controller';
import { authService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';


@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
    secret: 'abc123',
    signOptions: {expiresIn: '1h'},
  })],
  controllers: [authController],
  providers: [authService, LocalStrategy,],
  exports: [TypeOrmModule.forFeature([User]), JwtModule, PassportModule],
})
export class AuthModule {}
