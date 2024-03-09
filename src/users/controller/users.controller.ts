import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UsersService } from '../service/users.service';
//import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersController: UsersService) {}

    @Get()
     getUsers() {
       return this.usersController.findUsers();
        
    }

   // @Post()
     //  createPost(@Body() createUserDto: CreateUserDto) {
     //  return this.usersController.createUsers(createUserDto);
   // }



    @Post()
    @UseInterceptors(FileInterceptor('file', {dest: './uploads'}))
    uploadFile(@UploadedFiles() file: Express.Multer.File) {
      console.log(file)
    }
    
}

