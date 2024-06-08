import { CollaborationInvitationListRelationFilter } from "../collaborationInvitation/CollaborationInvitationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  collaborationInvitations?: CollaborationInvitationListRelationFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lead?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
