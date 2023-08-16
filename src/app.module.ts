import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CommomModule } from './common/common.module';
import { DeskModule } from './desks/desks.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CommomModule,
    DeskModule,
    OrdersModule,],

})
export class AppModule { }
