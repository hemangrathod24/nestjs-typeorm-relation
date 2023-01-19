
import { Entity, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/modules/user/entities/user.entity";


@Entity()
export class Cart {

    @PrimaryColumn({
        name: 'product_id'
    })
    productId: number;


    @Column({
        name: 'quantity'
    })
    quantity: number;

    @Column({ type: "float" ,
        name: 'amount'
    })
    amount: number;

    @ManyToOne(()=> User, (user) => user.cart) 
    user: User; 
 
}
