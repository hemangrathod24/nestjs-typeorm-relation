import { Type } from "class-transformer";
import { IsOptional, IsDate } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany  } from "typeorm";
import { Cart } from "src/modules/cart/entities/cart.entity";
export enum gender {
    Maleuser = "Male",
    Femaluser = "Female"
}



@Entity()
export class User {

    @PrimaryGeneratedColumn({
        name: 'user_id'
    })
    userId: number;

    @Column({
        name: 'first_Name',
        nullable: false
    })
    firstName: string

    @Column({
        name: 'last_Name',
        nullable: false
    })
    lastName: string

    @Column({
        name: 'user_Name',
        nullable: false
    })
    userName: string

    @Column({
        type: "enum",
        enum: gender,
        nullable: false
        
    })  
    gender: gender

    @OneToMany( () => Cart, (cart) => cart.user)
    cart: Cart[];  
}
