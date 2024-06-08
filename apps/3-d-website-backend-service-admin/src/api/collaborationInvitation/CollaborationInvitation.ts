import { Developer } from "../developer/Developer";
import { Project } from "../project/Project";

export type CollaborationInvitation = {
  createdAt: Date;
  developer?: Developer | null;
  id: string;
  project?: Project | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
