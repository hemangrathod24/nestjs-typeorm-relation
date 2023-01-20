import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { Repository } from 'typeorm';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { UserService } from '../user/user.service';
import { isNotEmpty } from 'class-validator';
import { User } from '../user/entities/user.entity';

@Injectable()
export class CartService {
         
  constructor(@InjectRepository(Cart) private repo: Repository<Cart>,
  @InjectRepository(User) private userrepo: Repository<User>
  ) {}


  async create(createCartDto: CreateCartDto , user: User)  {


    // const newProduct = await this.repo.save({productId:createCartDto.productId })
    // user.cart = [...user.cart, newProduct]
    
    
    // await this.userrepo.save(user)
    // return newProduct;

    const newCart = await this.repo.create(createCartDto);
    if(!newCart){
      throw new console.error('Ohh, Product could not be created');
    }
    await this.repo.save(newCart);

    user.cart = [...user.cart , newCart];
    
   await this.userrepo.save(user);

   console.log(user);
   
    return newCart;


  }

  async findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async update(productId: number, updateCartDto: UpdateCartDto) : Promise<UpdateCartDto>{
    const product = await this.repo.findOneBy({productId});
    if(!product)
            {
                throw new NotFoundException;
            }
            const user = Object.assign(product,updateCartDto);
            return this.repo.save(user)
  }



 
  async remove(productId: number) : Promise<Cart>{
    const pro = await this.repo.findOneBy({productId})
    if(!pro){
      throw new NotFoundException('product Not found');
    }
    return this.repo.remove(pro);
  }

  // async findCheck(userId: number){
  //   const pro = await this.repo.findOneBy({userId: userId})
  //   if(!pro){
  //     throw new NotFoundException('product Not found');
  //   }
  //   return pro
  // }
}
