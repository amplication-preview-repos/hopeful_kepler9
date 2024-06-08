import { CollaborationInvitation as TCollaborationInvitation } from "../api/collaborationInvitation/CollaborationInvitation";

export const COLLABORATIONINVITATION_TITLE_FIELD = "id";

export const CollaborationInvitationTitle = (
  record: TCollaborationInvitation
): string => {
  return record.id?.toString() || String(record.id);
};
