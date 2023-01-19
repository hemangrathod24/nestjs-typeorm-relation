import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService, 
    private readonly userService : UserService) {}


  @UsePipes( ValidationPipe)
  @Post('add')
 async  create(@Body() createCartDto: CreateCartDto){
    console.log(createCartDto);
    
    const user = await  this.userService.findOneById(createCartDto.userId)

    if(user){

      return await this.cartService.create(createCartDto , user ) ;
    }

  }

  // @Get(':userId')
  // findAll(@Param('userId') userId: number) : Promise<Cart[]> {
  //   return this.cartService.findAll(userId);
  // } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(':productId')
  async update(@Param('productId') productId: number, @Body() body: UpdateCartDto) : Promise<UpdateCartDto> {
   return this.cartService.update(productId, body);
  }

  @Delete(':productId')
  remove(@Param('productId') productId: number) : Promise<Cart>{
    return this.cartService.remove(productId);
  }
}
