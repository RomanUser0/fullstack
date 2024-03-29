import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users/users';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';



@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }


    findUsers() { 
       return this.userRepository.find()
    }

    createUsers(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createAt: new Date(),
        })
        return this.userRepository.save(newUser)
    }
}


