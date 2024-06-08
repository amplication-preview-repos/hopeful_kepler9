import { CollaborationInvitationUpdateManyWithoutDevelopersInput } from "./CollaborationInvitationUpdateManyWithoutDevelopersInput";

export type DeveloperUpdateInput = {
  bio?: string | null;
  collaborationInvitations?: CollaborationInvitationUpdateManyWithoutDevelopersInput;
  email?: string | null;
  username?: string | null;
};
