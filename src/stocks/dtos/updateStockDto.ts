import { IsInt, IsNotEmpty } from "class-validator";

export class UpdateStockDto {

    @IsNotEmpty()
    @IsInt()
    quantity: number
}