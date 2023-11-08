import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Create,
} from "react-admin";

import { useRecordContext } from "react-admin";

const postFilters = [
  // eslint-disable-next-line react/jsx-key
  <TextInput source="q" label="Search" alwaysOn />,
  // eslint-disable-next-line react/jsx-key
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="content" multiline rows={5} />
      <ReferenceInput source="userId" reference="users" />
    </SimpleForm>
  </Edit>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
