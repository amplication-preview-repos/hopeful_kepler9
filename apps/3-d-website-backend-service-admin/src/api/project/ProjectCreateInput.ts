import { CollaborationInvitationCreateNestedManyWithoutProjectsInput } from "./CollaborationInvitationCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  collaborationInvitations?: CollaborationInvitationCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  endDate?: Date | null;
  lead?: string | null;
  startDate?: Date | null;
  title?: string | null;
};
