import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Public } from "src/common/decorators/public.decorator";
import { CreateProductDto } from "./dtos/createProductDto";
import { UpdateProductDto } from "./dtos/updateProductDto";
import { Product } from "@prisma/client";
import { ProductService } from "./products.service";

@Controller("products")
@Public()
export class ProductsController {

    constructor(private readonly productsService: ProductService) { }

    @Get()
    public async getAll(): Promise<Product[]> {
        return await this.productsService.getAllProducts();
    }

    @Post()
    public async createProduct(@Body() body: CreateProductDto): Promise<Product> {
        return await this.productsService.createProduct(body)
    }

    @Put(":id")
    public async updateOrder(
        @Body() body: UpdateProductDto,
        @Param("id") id: string): Promise<Product> {
        return await this.productsService.updateProduct(body, +id);
    }

    @Delete(":id")
    public async deleteOrder(@Param("id") id: string): Promise<Product> {
        return await this.productsService.deleteProduct(+id);
    }
}