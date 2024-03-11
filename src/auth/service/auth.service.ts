import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { Repository } from 'typeorm';
import { AuthPayloadDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class authService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService) { }



    async validateUser({ username, password }: AuthPayloadDto) {
        const findUser = await this.userRepository.findOneBy({ username, password })
        if (!findUser) return null

        if (password === findUser.password) {
            const {password, ...user} = findUser
           return this.jwtService.sign(user)
        }

    }
}
