import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CommomModule } from './common/common.module';
import { DeskModule } from './desks/desks.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';
import { OrderItemModule } from './orderItem/orderItem.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CommomModule,
    DeskModule,
    OrdersModule,
    ProductsModule,
    StocksModule,
    OrderItemModule
  ],

})
export class AppModule { }
