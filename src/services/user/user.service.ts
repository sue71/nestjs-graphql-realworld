import { Injectable } from '@nestjs/common';
import { User } from '~entities/user/user.entity';

@Injectable()
export class UserService {
  batchGetUsers(ids: string[]): Promise<User[]> {
    return Promise.resolve(
      ids.map((id) => ({
        id,
        name: id,
      })),
    );
  }
}
