import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaborationInvitationServiceBase } from "./base/collaborationInvitation.service.base";

@Injectable()
export class CollaborationInvitationService extends CollaborationInvitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
