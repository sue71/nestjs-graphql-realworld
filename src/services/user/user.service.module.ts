import { Module } from '@nestjs/common';
import { UserDataLoader } from './user.dataloader';
import { UserService } from './user.service';

@Module({
  providers: [UserService, UserDataLoader],
  exports: [UserDataLoader],
})
export class UserServiceModule {}
