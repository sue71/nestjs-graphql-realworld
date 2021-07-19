import { Class } from '~types/utils';
import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export type Edge<T> = {
  cursor?: string;
  node: T;
};

export type PaginatedConnection<T> = {
  edges: Edge<T>[];
  pageInfo: PageInfo;
};

@ObjectType()
export class PageInfo {
  @Field(() => Boolean)
  hasNextPage: boolean;
  @Field(() => String, { nullable: true })
  endCursor?: string;
}

export function PaginatedConnection<T>(
  classRef: Type<T>,
): Class<PaginatedConnection<T>> {
  @ObjectType({ isAbstract: true })
  class ConnectionType implements PaginatedConnection<T> {
    @Field(() => [EdgeType], { nullable: true })
    edges: EdgeType[];

    @Field(() => PageInfo)
    pageInfo: PageInfo;
  }

  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType implements Edge<T> {
    @Field(() => String, { nullable: true })
    cursor?: string;

    @Field(() => classRef)
    node: T;
  }
  return ConnectionType as any;
}
