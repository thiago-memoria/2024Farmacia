import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { CardEntity } from "./card.entity";

@Entity({
  name: 'walletEntity'
})
export class WalletEntity {
    @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number; 

    @Column()
    holder: string;
        
    @Column({
        type: 'date',
        nullable: true,
      })
      birthAt?: Date;
    
    @Column()
    bank: string;
    
    @Column()
    cityAgency: string;
  
    @Column()
    numberAgency: string;
    
    @Column()
    accountNumber: string;
      
    @Column()
    typeAccount: string;
    
    @Column()
    cpf_cnpj: string;
  
    @Column()
    typePayment: string;
    
    @Column()
    pix: string;
  
    @Column()
    balance: number;
    
    @Column()
    isActive: boolean;

    @CreateDateColumn()
    createdAt?: Date;
  
    @UpdateDateColumn()
    updatedAt?: Date;

  }