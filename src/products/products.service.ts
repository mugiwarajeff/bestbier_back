import { Injectable } from "@nestjs/common";
import { Product } from "@prisma/client";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateProductDto } from "./dtos/createProductDto";
import { UpdateProductDto } from "./dtos/updateProductDto";

@Injectable()
export class ProductService {

    constructor(private readonly prismaService: PrismaService){}

    public async getAllProducts(): Promise<Product[]>{
        return await this.prismaService.product.findMany({});
    }

    public async createProduct(product: CreateProductDto): Promise<Product>{
        const createdProduct: Product = await this.prismaService.product.create({data: product});

        return createdProduct;
    }

    public async updateProduct(product: UpdateProductDto, id: number): Promise<Product>{
        const updatedProduct: Product = await this.prismaService.product.update({
            data: product,
            where: {id: id}
        });

        return updatedProduct;
    }

    public async deleteProduct(id: number): Promise<Product>{
        const deletedProduct: Product = await this.prismaService.product.delete({
            where: {id :id}
        });

        return deletedProduct;
    }
}