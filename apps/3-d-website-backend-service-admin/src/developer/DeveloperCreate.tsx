import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CollaborationInvitationTitle } from "../collaborationInvitation/CollaborationInvitationTitle";

export const DeveloperCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <ReferenceArrayInput
          source="collaborationInvitations"
          reference="CollaborationInvitation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollaborationInvitationTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
