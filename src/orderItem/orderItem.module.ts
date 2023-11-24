import { Module } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { OrderItemService } from "./orderItem.service";
import { OrderItemController } from "./orderItem.controller";

@Module({
    controllers: [OrderItemController],
    providers: [PrismaService, OrderItemService]
})
export class OrderItemModule{}