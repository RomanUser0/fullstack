import { Body, Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthPayloadDto } from '../dtos/auth.dto';
import { authService } from '../service/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../guards/jwt.guard';

@Controller()
export class authController {

    constructor(private readonly authController: authService) {}

    @Post('api/login')
    @UseGuards(AuthGuard('local'))
    login(@Body() authPayload: AuthPayloadDto) {
        const user = this.authController.validateUser(authPayload)
        return user
    }

    @Get('api/status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request) {
        console.log('111111')
    }


}
