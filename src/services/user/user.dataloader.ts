import { BaseDataLoader } from '~shared/dataloader/dataloader';
import { User } from '~entities/user/user.entity';
import { UserService } from './user.service';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class UserDataLoader extends BaseDataLoader<string, User> {
  constructor(private readonly service: UserService) {
    super();
  }
  batchLoad(keys) {
    console.log(this.service);
    return this.service.batchGetUsers(keys);
  }
}
