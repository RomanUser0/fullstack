import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from '../dtos/auth.dto';
import { authService } from '../service/auth.service';

@Controller()
export class authController {

    constructor(private readonly authController: authService) {}

    @Post('login')
    login(@Body() authPayload: AuthPayloadDto) {
        return this.authController.validateUser(authPayload)
    }


}
