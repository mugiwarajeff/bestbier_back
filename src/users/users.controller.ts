import { Body, Controller, Get, Req, Post, Put, Param, Delete, ValidationError, BadRequestException, ValidationPipe, UsePipes, } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";


@Controller("users")
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    public async getAll(@Body() request: Body): Promise<string> {
        console.log(request.text);
        return await this.usersService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    public async createUser(@Body() user: CreateUserDto): Promise<string> {

        return await this.usersService.createUser();
    }

    @Put(":id")
    public async updateuser(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<string> {

        console.log(user);
        return await this.usersService.updateUser(+id);
    }

    @Delete(":id")
    public async deleteUser(@Param('id') id: string): Promise<string> {

        console.log(id);
        return await this.usersService.deleteUser(+id);
    }
}