import { ResolveField, Resolver, Query, Parent } from '@nestjs/graphql';
import { Book } from '~entities/book/book.entity';
import { User } from '~entities/user/user.entity';
import { BookService } from '~services/book/book.service';
import { BookConnection } from '~services/book/models/book.connection.model';
import { UserDataLoader } from '~services/user/user.dataloader';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly userDataLoader: UserDataLoader,
    private readonly bookService: BookService,
  ) {}

  @Query(() => BookConnection)
  books(): Promise<BookConnection> {
    return this.bookService.listBooks();
  }

  @ResolveField(() => User)
  author(@Parent() { authorId }: Book): Promise<User> {
    return this.userDataLoader.load(authorId);
  }
}
