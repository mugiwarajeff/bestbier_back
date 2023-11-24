import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Public } from "src/common/decorators/public.decorator";
import { DeskService } from "./desks.service";
import { Desk } from "@prisma/client";
import { CreateDeskDto } from "./dtos/createDeskDto";
import { UpdateDeskDto } from "./dtos/updateDeskDto";

@Controller("desks")
export class DeskController {

    constructor(private readonly deskService: DeskService) { }

    @Get()
    public async getDesks(): Promise<Desk[]> {
        return await this.deskService.getAll();
    }

    @Post()
    public async createDesk(@Body() body: CreateDeskDto): Promise<Desk> {
        return await this.deskService.create(body);
    }

    @Put(":id")
    public async updateDesk(@Body() body: UpdateDeskDto, @Param("id") id: string): Promise<Desk> {
        return await this.deskService.update(body, +id);
    }

    @Delete(":id")
    public async deleteDesk(@Param("id") id: string): Promise<Desk> {
        console.log(id);
        return await this.deskService.delete(+id);
    }
}