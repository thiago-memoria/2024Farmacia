import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingController } from 'src/controllers/shopping.controller';
import { ShoppingEntity } from 'src/entities/shopping.entity';
import { ShoppingService } from 'src/services/shopping.service';
import { UsersModule } from './users.module';
import { UserEntity } from 'src/entities/user.entity';



@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([ShoppingEntity]),
    TypeOrmModule.forFeature([UserEntity])
  ],


  controllers: [ShoppingController],
  providers: [ShoppingService],
  exports: [ShoppingService]
})
export class ShoppingModule {}
