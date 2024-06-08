import { CollaborationInvitationCreateNestedManyWithoutDevelopersInput } from "./CollaborationInvitationCreateNestedManyWithoutDevelopersInput";

export type DeveloperCreateInput = {
  bio?: string | null;
  collaborationInvitations?: CollaborationInvitationCreateNestedManyWithoutDevelopersInput;
  email?: string | null;
  username?: string | null;
};
