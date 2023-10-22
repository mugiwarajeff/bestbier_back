import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateStockDto } from "./dtos/createStockDto";
import { Stock } from "@prisma/client";
import { UpdateDeskDto } from "src/desks/dtos/updateDeskDto";
import { UpdateStockDto } from "./dtos/updateStockDto";

@Injectable()
export class StocksService {

    constructor(private readonly prismaService: PrismaService){}

    public async getStocks(): Promise<Stock[]>{

        return this.prismaService.stock.findMany({});
    }

    public async createStock(stock: CreateStockDto): Promise<Stock>{
        const createdStock: Stock = await this.prismaService.stock.create({data: stock});

        return createdStock;
    }

    public async updateStock(stock: UpdateStockDto, id: number): Promise<Stock>{
        const updatedStock: Stock = await this.prismaService.stock.update({
            data: stock,
            where: {id: id}
        });

        return updatedStock;
    }

    public async deleteStock(id: number): Promise<Stock>{
        const deletedStock: Stock = await this.prismaService.stock.delete({
            where: {id: id}
        });

        return deletedStock;
    }
}