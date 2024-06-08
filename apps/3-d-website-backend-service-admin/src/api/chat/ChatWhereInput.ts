import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
