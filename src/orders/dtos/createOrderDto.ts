
import { IsNotEmpty, IsString } from "class-validator"

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    status: string

    @IsString()
    description: string

    @IsNotEmpty() //precisa ja ter uma mesa criada
    deskId: number

}