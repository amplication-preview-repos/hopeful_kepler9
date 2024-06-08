import * as graphql from "@nestjs/graphql";
import { CollaborationInvitationResolverBase } from "./base/collaborationInvitation.resolver.base";
import { CollaborationInvitation } from "./base/CollaborationInvitation";
import { CollaborationInvitationService } from "./collaborationInvitation.service";

@graphql.Resolver(() => CollaborationInvitation)
export class CollaborationInvitationResolver extends CollaborationInvitationResolverBase {
  constructor(protected readonly service: CollaborationInvitationService) {
    super(service);
  }
}
