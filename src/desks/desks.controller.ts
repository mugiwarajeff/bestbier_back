import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Public } from "src/common/decorators/public.decorator";
import { DeskService } from "./desks.service";
import { Desk } from "@prisma/client";
import { CreateDeskDto } from "./dtos/createDeskDto";

@Controller("desks")
@Public()
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
    public async updateDesk(): Promise<any> {

        return this.deskService.update();
    }

    @Delete(":id")
    public async deleteDesk(): Promise<any> {

        return this.deskService.delete();
    }
}