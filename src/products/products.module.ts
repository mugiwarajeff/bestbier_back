import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { PrismaService } from "src/common/services/prisma.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductService, PrismaService]
})
export class ProductsModule { }