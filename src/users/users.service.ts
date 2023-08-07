import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { User, Prisma } from "@prisma/client";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UsersService {

    constructor(private readonly prismaService: PrismaService) { }


    public async getAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    public async createUser(user: CreateUserDto): Promise<User> {
        const createdUser: User = await this.prismaService.user.create({ data: user })
        return createdUser
    }

    public async updateUser(id: number, user: UpdateUserDto): Promise<User> {

        return await this.prismaService.user.update({ data: user, where: { id } })
    }

    public async deleteUser(id: number): Promise<User> {
        return await this.prismaService.user.delete({ where: { id } })
    }
}