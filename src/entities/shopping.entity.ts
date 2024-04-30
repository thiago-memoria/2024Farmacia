import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';
import { solicitacaoCompraStatus } from 'src/enum/solicitacaoCompraStatus.enum';

@Entity({
  name: 'shoppings',
})
export class ShoppingEntity{

  @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number;
  
  @Column()
  storeAddress: string;

  @Column()
  deliveryAddress: string;

  @Column()
  deliveryTime: string;

  @Column()
  duration: string;
  
  @Column({
    default: solicitacaoCompraStatus.Created,
  })
  status: number;  

  @Column()
  code: string;
   
  @OneToMany(() => ProductEntity, (productEntity) => productEntity.shoppingEntity)
  @JoinTable()
  productEntity: ProductEntity[]
   
  @ManyToOne(() => UserEntity, (userEntity) => userEntity.shoppingEntity, {
    eager:false,
  })
  userEntity: UserEntity

}
