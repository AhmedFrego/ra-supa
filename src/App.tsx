import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import { PostCreate, PostEdit, PostList } from "./posts";
import { UserList } from "./Users";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { LoginPage } from "ra-supabase";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={LoginPage}
  >
    <Resource
      name="comments"
      list={UserList}
      recordRepresentation="name"
      show={ShowGuesser}
      icon={UserIcon}
    />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
);
