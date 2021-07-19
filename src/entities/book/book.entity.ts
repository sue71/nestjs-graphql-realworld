import { HideField, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  constructor(book: Book) {
    this.id = book.id;
    this.name = book.name;
    this.authorId = book.authorId;
  }

  id?: string;
  name?: string;

  @HideField()
  authorId?: string;
}
