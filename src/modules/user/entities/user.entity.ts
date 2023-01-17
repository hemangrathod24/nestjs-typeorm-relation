import { Type } from "class-transformer";
import { IsOptional, IsDate } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn  } from "typeorm";
export enum gender {
    Maleuser = "Male",
    Femaluser = "Female"
}


@Entity()
export class User {


    @PrimaryGeneratedColumn()
    id: number
 
    @Column({
        name: 'first_Name'
    })
    firstName: string

    @Column({
        name: 'last_Name'
    })
    lastName: string

    @Column({
        name: 'user_Name'
    })
    userName: string

    @Column({
        type: "enum",
        enum: gender,
        
    })  
    gender: gender

    
}
