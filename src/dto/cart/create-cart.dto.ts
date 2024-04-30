import { IsObject, IsString } from 'class-validator';
import { CreateUserDto } from '../user/create-user.dto';
import { CreateProductDTO } from '../product/create-product.dto';
import { UserEntity } from 'src/entities/user.entity';


export class CreateCartDto {


    @IsString()
    value: string;

    @IsObject()
    user: UserEntity;

}
