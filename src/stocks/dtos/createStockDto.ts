import { IsInt, IsNotEmpty } from "class-validator"

export class CreateStockDto {

    @IsNotEmpty()
    @IsInt()
    productId: number

    @IsNotEmpty()
    @IsInt()
    quantity: number
}