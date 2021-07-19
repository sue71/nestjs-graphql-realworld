import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  id!: string;
  name?: string;
}
