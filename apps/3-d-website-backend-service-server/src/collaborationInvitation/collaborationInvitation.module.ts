import { Module } from "@nestjs/common";
import { CollaborationInvitationModuleBase } from "./base/collaborationInvitation.module.base";
import { CollaborationInvitationService } from "./collaborationInvitation.service";
import { CollaborationInvitationController } from "./collaborationInvitation.controller";
import { CollaborationInvitationResolver } from "./collaborationInvitation.resolver";

@Module({
  imports: [CollaborationInvitationModuleBase],
  controllers: [CollaborationInvitationController],
  providers: [CollaborationInvitationService, CollaborationInvitationResolver],
  exports: [CollaborationInvitationService],
})
export class CollaborationInvitationModule {}
