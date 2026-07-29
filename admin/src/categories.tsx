import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const CategoryList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Nom" />
            <TextField source="slug" label="Identifiant (slug)" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" label="Nom" fullWidth />
            <TextInput source="slug" label="Identifiant (slug - ex: btp)" fullWidth />
        </SimpleForm>
    </Edit>
);

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Nom" fullWidth />
            <TextInput source="slug" label="Identifiant (slug - ex: btp)" fullWidth />
        </SimpleForm>
    </Create>
);
