import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Stock } from "@prisma/client";
import { CreateStockDto } from "./dtos/createStockDto";
import { UpdateStockDto } from "./dtos/updateStockDto";
import { Public } from "src/common/decorators/public.decorator";
import { StocksService } from "./stocks.service";

@Controller("stocks")
export class StocksController {

    constructor(private readonly stockService: StocksService){}

    @Get()
    public async getAll(): Promise<Stock[]>{
        return await this.stockService.getStocks();
    }

    @Post()
    public async create(@Body() body: CreateStockDto): Promise<Stock>{
        return await this.stockService.createStock(body);
    }

    @Put(":id")
    public async update(
        @Body() body: UpdateStockDto, 
        @Param("id")id: string): Promise<Stock>{
            return await this.stockService.updateStock(body, +id);
        }

    @Delete(":id")
    public async delete(@Param("id") id: string): Promise<Stock>{
        return await this.stockService.deleteStock(+id);
    }
}