import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {

    async transform(value: any, { metatype }: ArgumentMetadata) {

        if (!metatype || !this.toValidete(metatype)) {
            return value;
        }


        const object = plainToInstance(metatype, value);
        const erros = await validate(object);

        if (erros.length > 0) {

            throw new BadRequestException("Validation Failed");
        }

        return value;
    }

    private toValidete(metatype: Function): boolean {

        const types: Function[] = [String, Boolean, Number, Array, Object];

        return !types.includes(metatype);
    }

}