import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { Repository } from 'typeorm';
import { AuthPayloadDto } from '../dtos/auth.dto';


@Injectable()
export class authService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }



   async validateUser ({ username, password }: AuthPayloadDto) {
        const findUser = await this.userRepository.findOneBy({username, password})
        console.log(findUser)
        return findUser
        
    }
}
