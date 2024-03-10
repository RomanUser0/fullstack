import { Module } from '@nestjs/common';
import { authController } from './controller/auth.controller';
import { authService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({
    secret: 'abc123',
    signOptions: {expiresIn: '1h'},
  })],
  controllers: [authController],
  providers: [authService]
})
export class AuthModule {}
