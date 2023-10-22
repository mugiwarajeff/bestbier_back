import { Module } from "@nestjs/common";
import { StocksController } from "./stocks.controller";
import { StocksService } from "./stocks.service";
import { PrismaService } from "src/common/services/prisma.service";

@Module({
    controllers: [StocksController],
    providers: [StocksService, PrismaService],
})
export class StocksModule {}