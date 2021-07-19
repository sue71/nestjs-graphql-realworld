import { ObjectType } from '@nestjs/graphql';
import { PaginatedConnection } from 'src/shared/pagination/connection.entity';
import { Book } from '~entities/book/book.entity';

@ObjectType()
export class BookConnection extends PaginatedConnection(Book) {}
