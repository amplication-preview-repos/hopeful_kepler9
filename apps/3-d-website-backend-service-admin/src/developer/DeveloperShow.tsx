import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEVELOPER_TITLE_FIELD } from "./DeveloperTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const DeveloperShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="CollaborationInvitation"
          target="developerId"
          label="CollaborationInvitations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="developer"
              source="developer.id"
              reference="Developer"
            >
              <TextField source={DEVELOPER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
