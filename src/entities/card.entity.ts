import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WalletEntity } from "./wallet.entity";
import { tipoCartao } from "src/enum/tipoCartao.enum";

@Entity({
    name: 'cards',
})
export class CardEntity{

    @PrimaryGeneratedColumn({
      })
      id: number;

    @Column()
    cardNumber: string;

    @Column()
    expirationDate: string;

    @Column()
    cvv: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    cardNickname: string;

    @Column()
    name: string;

    @Column({
        default: tipoCartao.Credit,
      })
    type: number;
}