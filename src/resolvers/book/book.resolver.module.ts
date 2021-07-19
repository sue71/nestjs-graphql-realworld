import { Module } from '@nestjs/common';
import { BookServiceModule } from '~services/book/book.service.module';
import { UserServiceModule } from '~services/user/user.service.module';
import { BookResolver } from './book.resolver';

@Module({
  imports: [UserServiceModule, BookServiceModule],
  providers: [BookResolver],
})
export class BookModule {}
