import { Injectable } from "@nestjs/common";
import { Order } from "@prisma/client";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateOrderDto } from "./dtos/createOrderDto";
import { UpdateOrderDto } from "./dtos/updateOrderDto";

@Injectable()
export class OrdersService {

    constructor(private readonly prismaService: PrismaService) { }

    public async getAll(): Promise<Order[]> {
        const orders = await this.prismaService.order.findMany();
        return orders;
    }

    public async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const createdOrder = await this.prismaService.order.create({ data: createOrderDto });
        return createdOrder;
    }

    public async updateOrder(updateOrderDto: UpdateOrderDto, id: number): Promise<Order> {

        const updatedOrder = await this.prismaService.order.update({ data: updateOrderDto, where: { id: id } });
        return updatedOrder;
    }
}