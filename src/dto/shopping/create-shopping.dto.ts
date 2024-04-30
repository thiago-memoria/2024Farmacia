import { IsObject, IsString } from 'class-validator';
import { CreateUserDto } from '../user/create-user.dto';
import { CreateProductDTO } from '../product/create-product.dto';
import { AddressDto } from '../address/address.dto';


export class CreateShoppingDTO {
 
    @IsString()
    duration: string;
    
    @IsString()
    verificationCode: string;
    
    @IsString()
    storeAddress: string;
    
    @IsString()
    deliveryAddress: string;
    
    @IsString()
    deliveryTime: string;
    
    @IsObject()
    user: CreateUserDto;
    
    @IsObject()
    product: CreateProductDTO[];
}
