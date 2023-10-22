import { IsDecimal, IsNotEmpty, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    name: string

    @IsString()
    description: string

    @IsNotEmpty()
    category: string

    @IsNotEmpty()
    @IsDecimal()
    price: number
}