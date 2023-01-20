import { IsNumber, IsOptional } from "class-validator";

export class CreateCartDto {

    
    @IsNumber()
    productId: number;

    @IsNumber()
    quantity: number;

    @IsNumber()
    amount: number;

    @IsNumber()
    userId: number;
}
