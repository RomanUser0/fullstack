import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { Repository } from 'typeorm';
import { AuthPayloadDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class authService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
        jwtService: JwtService) { }



    validateUser({ username, password }: AuthPayloadDto) {
        const findUser = this.userRepository.findOneBy({ username, password })
        console.log(findUser)
        return findUser
        
    }
}
