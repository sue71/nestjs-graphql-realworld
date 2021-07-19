import { Injectable } from '@nestjs/common';
import { Book } from '~entities/book/book.entity';
import { BookConnection } from '~services/book/models/book.connection.model';

@Injectable()
export class BookService {
  listBooks(): Promise<BookConnection> {
    return Promise.resolve({
      edges: [
        {
          node: new Book({
            id: '',
            name: '',
            authorId: '',
          }),
        },
        {
          node: new Book({
            id: '',
            name: '',
            authorId: '',
          }),
        },
        {
          node: new Book({
            id: '',
            name: '',
            authorId: '',
          }),
        },
      ],
      pageInfo: {
        hasNextPage: false,
        endCursor: '',
      },
    });
  }
}
