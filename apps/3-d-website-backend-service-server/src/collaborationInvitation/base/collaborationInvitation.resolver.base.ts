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
import { CollaborationInvitation } from "./CollaborationInvitation";
import { CollaborationInvitationCountArgs } from "./CollaborationInvitationCountArgs";
import { CollaborationInvitationFindManyArgs } from "./CollaborationInvitationFindManyArgs";
import { CollaborationInvitationFindUniqueArgs } from "./CollaborationInvitationFindUniqueArgs";
import { CreateCollaborationInvitationArgs } from "./CreateCollaborationInvitationArgs";
import { UpdateCollaborationInvitationArgs } from "./UpdateCollaborationInvitationArgs";
import { DeleteCollaborationInvitationArgs } from "./DeleteCollaborationInvitationArgs";
import { Developer } from "../../developer/base/Developer";
import { Project } from "../../project/base/Project";
import { CollaborationInvitationService } from "../collaborationInvitation.service";
@graphql.Resolver(() => CollaborationInvitation)
export class CollaborationInvitationResolverBase {
  constructor(protected readonly service: CollaborationInvitationService) {}

  async _collaborationInvitationsMeta(
    @graphql.Args() args: CollaborationInvitationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CollaborationInvitation])
  async collaborationInvitations(
    @graphql.Args() args: CollaborationInvitationFindManyArgs
  ): Promise<CollaborationInvitation[]> {
    return this.service.collaborationInvitations(args);
  }

  @graphql.Query(() => CollaborationInvitation, { nullable: true })
  async collaborationInvitation(
    @graphql.Args() args: CollaborationInvitationFindUniqueArgs
  ): Promise<CollaborationInvitation | null> {
    const result = await this.service.collaborationInvitation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CollaborationInvitation)
  async createCollaborationInvitation(
    @graphql.Args() args: CreateCollaborationInvitationArgs
  ): Promise<CollaborationInvitation> {
    return await this.service.createCollaborationInvitation({
      ...args,
      data: {
        ...args.data,

        developer: args.data.developer
          ? {
              connect: args.data.developer,
            }
          : undefined,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CollaborationInvitation)
  async updateCollaborationInvitation(
    @graphql.Args() args: UpdateCollaborationInvitationArgs
  ): Promise<CollaborationInvitation | null> {
    try {
      return await this.service.updateCollaborationInvitation({
        ...args,
        data: {
          ...args.data,

          developer: args.data.developer
            ? {
                connect: args.data.developer,
              }
            : undefined,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => CollaborationInvitation)
  async deleteCollaborationInvitation(
    @graphql.Args() args: DeleteCollaborationInvitationArgs
  ): Promise<CollaborationInvitation | null> {
    try {
      return await this.service.deleteCollaborationInvitation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Developer, {
    nullable: true,
    name: "developer",
  })
  async getDeveloper(
    @graphql.Parent() parent: CollaborationInvitation
  ): Promise<Developer | null> {
    const result = await this.service.getDeveloper(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: CollaborationInvitation
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
