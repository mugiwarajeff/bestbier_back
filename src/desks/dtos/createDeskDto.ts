import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeskDto {

    @IsNotEmpty()
    @IsString()
    description: string
}   