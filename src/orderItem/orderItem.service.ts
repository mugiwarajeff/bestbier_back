import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateOrderItemDto } from "./dtos/CreateOrderItemDto";
import { OrderItem } from "@prisma/client";
import { UpdateOrderItemDto } from "./dtos/UpdateOrderItemDto";


@Injectable()
export class OrderItemService {

    constructor(private readonly prismaService: PrismaService){}

    public async createOrderItem(orderItem: CreateOrderItemDto): Promise<OrderItem>{
        const newOrderItem: OrderItem = await this.prismaService.orderItem.create(
            {data: { 
                quatity: orderItem.quantity, 
                orderId: orderItem.orderId, 
                productId: orderItem.productId
            }});

        return newOrderItem;
    }

    public async deleteOrderItem(id: number): Promise<OrderItem>{
        const deletedOrderItem: OrderItem = await this.prismaService.orderItem.delete({where: {id: id}});
        return deletedOrderItem;
    }

    public async updateOrderItem(orderItem: UpdateOrderItemDto, id: number): Promise<OrderItem>{

        const updatedOrderItem: OrderItem = await this.prismaService.orderItem.update(
            {
                data: {quatity: orderItem.quantity},
                where: {id: id }
            });

        return updatedOrderItem;
    }
}