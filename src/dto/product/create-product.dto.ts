import { IsBoolean, IsString, IsObject, IsNumber } from 'class-validator';
import { CreateCategoryDto } from '../category/create-category.dto';
import { CreateShoppingDTO } from '../shopping/create-shopping.dto';

export class CreateProductDTO {

    @IsString()
    description: string;

    @IsString()
    price: string;

    @IsString()
    kind: string;

    @IsBoolean()
    discount: boolean;

    @IsNumber()
    amount: number;

    @IsString()
    image: string;

    @IsString()
    name: string

    @IsObject()
    category: CreateCategoryDto;

    @IsObject()
    shopping: CreateShoppingDTO;
}