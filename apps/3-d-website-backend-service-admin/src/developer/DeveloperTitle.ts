import { Developer as TDeveloper } from "../api/developer/Developer";

export const DEVELOPER_TITLE_FIELD = "username";

export const DeveloperTitle = (record: TDeveloper): string => {
  return record.username?.toString() || String(record.id);
};
