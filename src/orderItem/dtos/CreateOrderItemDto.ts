import { IsInt, IsNotEmpty } from "class-validator"

export class CreateOrderItemDto {

    @IsInt()
    @IsNotEmpty()
    quantity: number

    @IsInt()
    @IsNotEmpty()
    orderId: number

    @IsInt()
    @IsNotEmpty()
    productId: number
}