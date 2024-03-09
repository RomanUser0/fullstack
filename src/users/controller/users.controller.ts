import { Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { UsersService } from '../service/users.service';
//import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class UsersController {
    constructor(private readonly usersController: UsersService) {}

    @Get('api/users')
     getUsers() {
       return this.usersController.findUsers();
        
    }

   // @Post()
     //  createPost(@Body() createUserDto: CreateUserDto) {
     //  return this.usersController.createUsers(createUserDto);
   // }



    @Post('api/upload')
    @UseInterceptors(FileInterceptor('file', {dest: './uploads'}))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file)
    }
    
}

