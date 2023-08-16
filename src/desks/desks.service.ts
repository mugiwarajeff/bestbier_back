import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { Desk } from "@prisma/client";
import { CreateDeskDto } from "./dtos/createDeskDto";
import { UpdateDeskDto } from "./dtos/updateDeskDto";

@Injectable()
export class DeskService {

    constructor(private readonly prismaService: PrismaService) { }

    public async getAll(): Promise<Desk[]> {
        const desks = await this.prismaService.desk.findMany({ include: {} });

        return desks;
    }

    public async create(createDeskDto: CreateDeskDto): Promise<Desk> {
        const createdDesk = await this.prismaService.desk.create({ data: createDeskDto });
        return createdDesk;
    };

    public async update(updateDeskDto: UpdateDeskDto, id: number): Promise<Desk> {
        const updatedDesk = await this.prismaService.desk.update({ data: updateDeskDto, where: { id: id } });

        return updatedDesk;
    };

    public async delete(id: number): Promise<Desk> {
        const deletedDesk = await this.prismaService.desk.delete({ where: { id: id } });

        return deletedDesk;
    }
}