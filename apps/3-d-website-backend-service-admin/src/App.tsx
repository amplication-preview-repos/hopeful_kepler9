import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { CollaborationInvitationList } from "./collaborationInvitation/CollaborationInvitationList";
import { CollaborationInvitationCreate } from "./collaborationInvitation/CollaborationInvitationCreate";
import { CollaborationInvitationEdit } from "./collaborationInvitation/CollaborationInvitationEdit";
import { CollaborationInvitationShow } from "./collaborationInvitation/CollaborationInvitationShow";
import { DeveloperList } from "./developer/DeveloperList";
import { DeveloperCreate } from "./developer/DeveloperCreate";
import { DeveloperEdit } from "./developer/DeveloperEdit";
import { DeveloperShow } from "./developer/DeveloperShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"3DWebsiteBackendService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="CollaborationInvitation"
          list={CollaborationInvitationList}
          edit={CollaborationInvitationEdit}
          create={CollaborationInvitationCreate}
          show={CollaborationInvitationShow}
        />
        <Resource
          name="Developer"
          list={DeveloperList}
          edit={DeveloperEdit}
          create={DeveloperCreate}
          show={DeveloperShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
      </Admin>
    </div>
  );
};

export default App;
