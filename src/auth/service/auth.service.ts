import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { Repository } from 'typeorm';
import { AuthPayloadDto } from '../dtos/auth.dto';


@Injectable()
export class authService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }



    validateUser({ username, password }: AuthPayloadDto) {
        const findUser = this.userRepository.findOneBy({username})
        console.log(findUser)
        return findUser
        
    }
}
