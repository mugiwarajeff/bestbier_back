import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Param,
    Delete,
    ValidationPipe,
    UsePipes,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { User } from "@prisma/client";


@Controller("users")
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    public async getAll(): Promise<User[]> {

        return await this.usersService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    public async createUser(@Body() user: CreateUserDto): Promise<User> {

        return await this.usersService.createUser(user);
    }

    @Put(":id")
    public async updateuser(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<User> {

        return await this.usersService.updateUser(+id, user);
    }

    @Delete(":id")
    public async deleteUser(@Param('id') id: string): Promise<User> {

        return await this.usersService.deleteUser(+id);
    }
}