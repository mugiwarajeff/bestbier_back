import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { Desk } from "@prisma/client";
import { CreateDeskDto } from "./dtos/createDeskDto";

@Injectable()
export class DeskService {

    constructor(private readonly prismaService: PrismaService) { }

    public async getAll(): Promise<Desk[]> {
        const desks = await this.prismaService.desk.findMany();

        return desks;
    }

    public async create(createDeskDto: CreateDeskDto): Promise<Desk> {
        const createdDesk = await this.prismaService.desk.create({ data: createDeskDto });

        return createdDesk;
    };

    public async update() { };

    public async delete() { }
}