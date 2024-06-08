import { CollaborationInvitationUpdateManyWithoutProjectsInput } from "./CollaborationInvitationUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  collaborationInvitations?: CollaborationInvitationUpdateManyWithoutProjectsInput;
  description?: string | null;
  endDate?: Date | null;
  lead?: string | null;
  startDate?: Date | null;
  title?: string | null;
};
