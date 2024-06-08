import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CollaborationInvitationTitle } from "../collaborationInvitation/CollaborationInvitationTitle";

export const DeveloperEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
