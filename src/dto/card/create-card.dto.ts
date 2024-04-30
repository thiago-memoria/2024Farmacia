import {
  IsString,
  IsObject,
  IsNumber
} from 'class-validator';
import { CreateWalletDto } from '../wallet/create-wallet.dto';


export class CreateCardDto {

@IsString()
cardNumber: string;

@IsString()
expirationDate: string;

@IsString()
cvv: string;

@IsString()
cpf_cnpj: string;

@IsString()
cardNickname: string;

@IsString()
name: string;

@IsNumber()
type: number;
}
