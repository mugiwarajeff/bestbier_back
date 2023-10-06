import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateDeskDto {

    @IsString()
    description: string

    @IsNotEmpty()
    @IsBoolean()
    available: boolean
}   