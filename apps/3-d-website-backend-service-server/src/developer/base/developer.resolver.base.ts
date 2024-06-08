/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Developer } from "./Developer";
import { DeveloperCountArgs } from "./DeveloperCountArgs";
import { DeveloperFindManyArgs } from "./DeveloperFindManyArgs";
import { DeveloperFindUniqueArgs } from "./DeveloperFindUniqueArgs";
import { CreateDeveloperArgs } from "./CreateDeveloperArgs";
import { UpdateDeveloperArgs } from "./UpdateDeveloperArgs";
import { DeleteDeveloperArgs } from "./DeleteDeveloperArgs";
import { CollaborationInvitationFindManyArgs } from "../../collaborationInvitation/base/CollaborationInvitationFindManyArgs";
import { CollaborationInvitation } from "../../collaborationInvitation/base/CollaborationInvitation";
import { DeveloperService } from "../developer.service";
@graphql.Resolver(() => Developer)
export class DeveloperResolverBase {
  constructor(protected readonly service: DeveloperService) {}

  async _developersMeta(
    @graphql.Args() args: DeveloperCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Developer])
  async developers(
    @graphql.Args() args: DeveloperFindManyArgs
  ): Promise<Developer[]> {
    return this.service.developers(args);
  }

  @graphql.Query(() => Developer, { nullable: true })
  async developer(
    @graphql.Args() args: DeveloperFindUniqueArgs
  ): Promise<Developer | null> {
    const result = await this.service.developer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Developer)
  async createDeveloper(
    @graphql.Args() args: CreateDeveloperArgs
  ): Promise<Developer> {
    return await this.service.createDeveloper({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Developer)
  async updateDeveloper(
    @graphql.Args() args: UpdateDeveloperArgs
  ): Promise<Developer | null> {
    try {
      return await this.service.updateDeveloper({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Developer)
  async deleteDeveloper(
    @graphql.Args() args: DeleteDeveloperArgs
  ): Promise<Developer | null> {
    try {
      return await this.service.deleteDeveloper(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CollaborationInvitation], {
    name: "collaborationInvitations",
  })
  async findCollaborationInvitations(
    @graphql.Parent() parent: Developer,
    @graphql.Args() args: CollaborationInvitationFindManyArgs
  ): Promise<CollaborationInvitation[]> {
    const results = await this.service.findCollaborationInvitations(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
