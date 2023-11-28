import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Public } from "src/common/decorators/public.decorator";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dtos/createOrderDto";
import { UpdateOrderDto } from "./dtos/updateOrderDto";
import { Order } from "@prisma/client";


@Controller("orders")
@Public()
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) { }

    @Get()
    public async getAll(): Promise<Order[]> {
        return await this.ordersService.getAll();
    }

    @Get(":id")
    public async getOrderById(@Param("id") id: string): Promise<Order>{
        return await this.ordersService.getOrderById(+id);
    }

    @Post()
    public async createOrder(@Body() body: CreateOrderDto): Promise<Order> {
        console.log(body);
        return await this.ordersService.createOrder(body);
    }

    @Put(":id")
    public async updateOrder(@Body() body: UpdateOrderDto, @Param("id") id: string): Promise<Order> {
        return await this.ordersService.updateOrder(body, +id);
    }
}