import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './entities/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';
import { UserController } from '../user/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, User]) , UserModule],
  controllers: [CartController , UserController],
  providers: [CartService , UserService]
})
export class CartModule {}
