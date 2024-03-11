import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local'
import { authService } from "../service/auth.service";
import { UnauthorizedException } from "@nestjs/common";


export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: authService) {
        super()
    }

    validate(username: string, password: string) {
        const user = this.authService.validateUser({username, password});
        if(!user) throw new UnauthorizedException()
        return user
    }
}