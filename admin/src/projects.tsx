import { List, Datagrid, TextField, ImageField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ProjectList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Titre" />
            <TextField source="category" label="Catégorie" />
            <ImageField source="image" title="title" sx={{ '& img': { maxWidth: 50, maxHeight: 50, objectFit: 'cover' } }} />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProjectEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" label="Titre" fullWidth />
            <TextInput source="description" label="Description" multiline fullWidth />
            <TextInput source="category" label="Catégorie (btp, commerciales, petrolieres)" fullWidth />
            <TextInput source="image" label="URL de l'image" fullWidth />
        </SimpleForm>
    </Edit>
);

export const ProjectCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" label="Titre" fullWidth />
            <TextInput source="description" label="Description" multiline fullWidth />
            <TextInput source="category" label="Catégorie (btp, commerciales, petrolieres)" fullWidth />
            <TextInput source="image" label="URL de l'image" fullWidth />
        </SimpleForm>
    </Create>
);
