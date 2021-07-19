import { Module } from '@nestjs/common';
import { UserResolver } from '~resolvers/user/user.resolver';
import { UserServiceModule } from '~services/user/user.service.module';

@Module({
  imports: [UserServiceModule],
  providers: [UserResolver],
})
export class UserModule {}
