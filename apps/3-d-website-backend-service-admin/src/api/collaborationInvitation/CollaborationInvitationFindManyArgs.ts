import { CollaborationInvitationWhereInput } from "./CollaborationInvitationWhereInput";
import { CollaborationInvitationOrderByInput } from "./CollaborationInvitationOrderByInput";

export type CollaborationInvitationFindManyArgs = {
  where?: CollaborationInvitationWhereInput;
  orderBy?: Array<CollaborationInvitationOrderByInput>;
  skip?: number;
  take?: number;
};
