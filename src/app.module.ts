import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from "@nestjs/config";
import { DatabaseConnectionService } from './database/databse-connection.service';
import { CartModule } from './modules/cart/cart.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),UserModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
