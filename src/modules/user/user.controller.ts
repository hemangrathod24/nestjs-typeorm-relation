import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query('email') userName: string) {
    return this.userService.findAll(userName);
  }

  @Get('/:userName')
  async findUser(@Param('userName') userName: string) {
    const user = await this.userService.findOne(userName);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Patch('/:userName')
  update(@Param('userName') userName: string, @Body() body: UpdateUserDto) {
    return this.userService.update(userName, body);
  }

  @Delete('/:userName')
  removeUser(@Param('userName') userName: string)
  {
      return this.userService.remove(userName);
      
  }
}



//

//created modules of user , R&D in PGAdmin4 , created Api for create user , find user and working on sign in user

// created modules of cart , R&D in PGAdmin4, Created Api for Add to cart , delete product from cart