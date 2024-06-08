import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CollaborationInvitationTitle } from "../collaborationInvitation/CollaborationInvitationTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="collaborationInvitations"
          reference="CollaborationInvitation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollaborationInvitationTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="end_date" source="endDate" />
        <TextInput label="lead" source="lead" />
        <DateTimeInput label="start_date" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
