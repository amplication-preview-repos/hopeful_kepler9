import { CollaborationInvitation } from "../collaborationInvitation/CollaborationInvitation";

export type Developer = {
  bio: string | null;
  collaborationInvitations?: Array<CollaborationInvitation>;
  createdAt: Date;
  email: string | null;
  id: string;
  updatedAt: Date;
  username: string | null;
};
