import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollaborationInvitationService } from "./collaborationInvitation.service";
import { CollaborationInvitationControllerBase } from "./base/collaborationInvitation.controller.base";

@swagger.ApiTags("collaborationInvitations")
@common.Controller("collaborationInvitations")
export class CollaborationInvitationController extends CollaborationInvitationControllerBase {
  constructor(protected readonly service: CollaborationInvitationService) {
    super(service);
  }
}
