import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type CollaborationInvitationCreateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
};
