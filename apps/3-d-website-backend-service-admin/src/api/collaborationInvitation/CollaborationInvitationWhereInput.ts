import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type CollaborationInvitationWhereInput = {
  developer?: DeveloperWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
};
