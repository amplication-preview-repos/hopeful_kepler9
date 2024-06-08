import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollaborationInvitationListRelationFilter } from "../collaborationInvitation/CollaborationInvitationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeveloperWhereInput = {
  bio?: StringNullableFilter;
  collaborationInvitations?: CollaborationInvitationListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  username?: StringNullableFilter;
};
