import {
    IsEmail,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    IsArray,
    Length,
    IsOptional,
    IsStrongPassword
} from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    public user: string


    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 0,
        minUppercase: 1
    })
    public password: string

    @IsString()
    @IsNotEmpty()
    public name: string

    @IsString()
    @Length(11, 11)
    public cpf: string

    @IsPhoneNumber()
    @IsOptional()
    public telefone: string

    @IsEmail()
    @IsOptional()
    public email: string

    @IsString()
    public role: string
}