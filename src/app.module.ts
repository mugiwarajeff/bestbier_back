import { Module } from '@nestjs/common';

import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CommomModule } from './common/common.module';

@Module({
  imports: [UsersModule, AuthModule, CommomModule],

})
export class AppModule { }
