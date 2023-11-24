import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { OrderItem } from "@prisma/client";
import { Public } from "src/common/decorators/public.decorator";
import { OrderItemService } from "./orderItem.service";
import { CreateOrderItemDto } from "./dtos/CreateOrderItemDto";
import { UpdateOrderItemDto } from "./dtos/UpdateOrderItemDto";

@Controller("orderItem")
export class OrderItemController {

    constructor(private readonly orderItemService: OrderItemService){}

    @Post()
    public async createOrderItem(@Body() body: CreateOrderItemDto): Promise<OrderItem>{
        
        const newOrderItem = await this.orderItemService.createOrderItem(body);

        return newOrderItem;
    }

    @Put(":id")
    public async updateOrderItem(@Param("id") id: string, @Body() body: UpdateOrderItemDto): Promise<OrderItem>{
        return await this.orderItemService.updateOrderItem(body, +id);
    }

    @Delete(":id")
    public async deleteOrderItem(@Param("id") id: string): Promise<OrderItem>{
        const deletedOrderItem: OrderItem = await this.orderItemService.deleteOrderItem(+id);

        return deletedOrderItem;
    }
    
}