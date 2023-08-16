import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CommomModule } from './common/common.module';
import { DeskModule } from './desks/desks.module';

@Module({
  imports: [UsersModule, AuthModule, CommomModule, DeskModule],

})
export class AppModule { }
