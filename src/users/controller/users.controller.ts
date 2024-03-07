import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersController: UsersService) {}

    @Get()
    async getUsers() {
       return this.usersController.findUsers();
        
    }

    @Post()
    createPost(@Body() createUserDto: CreateUserDto) {
       return this.usersController.createUsers(createUserDto);
    }
}
