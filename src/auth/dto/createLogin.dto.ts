import { IsNotEmpty } from "class-validator"

export class CreateLoginDto {

    @IsNotEmpty()
    user: string

    @IsNotEmpty()
    password: string
}