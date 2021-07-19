import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BookModule } from '~resolvers/book/book.resolver.module';
import { UserModule } from '~resolvers/user/user.resolver.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/gen/schema.gql'),
      transformAutoSchemaFile: true,
      playground: true,
    }),
    UserModule,
    BookModule,
  ],
})
export class AppModule {}
