import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type CollaborationInvitationUpdateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
};
