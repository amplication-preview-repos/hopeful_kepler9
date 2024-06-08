import { CollaborationInvitation } from "../collaborationInvitation/CollaborationInvitation";

export type Project = {
  collaborationInvitations?: Array<CollaborationInvitation>;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  lead: string | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
