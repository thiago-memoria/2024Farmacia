import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({
    name: 'address',
})
export class AddressEntity{

    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id?: number;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    cep: string;

    @Column()
    cidade: string;

    @Column()
    complemento: string;

    @Column()
    pontoReferencia: string;

    @ManyToOne(() => UserEntity, (user) => user.addressEntity)
    userEntity: UserEntity;
}