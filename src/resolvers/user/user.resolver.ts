import { Resolver, Query } from '@nestjs/graphql';
import { User } from '~entities/user/user.entity';
import { UserDataLoader } from '../../services/user/user.dataloader';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly dataloader: UserDataLoader) {}

  @Query(() => User)
  user(id: string): Promise<User> {
    return this.dataloader.load(id);
  }
}
