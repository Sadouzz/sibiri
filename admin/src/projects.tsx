import { List, Datagrid, TextField, DateField, EditButton, Edit, SimpleForm, TextInput, Create, ArrayInput, SimpleFormIterator, DateInput, ReferenceInput, SelectInput, ReferenceField } from 'react-admin';

export const ProjectList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Titre" />
            <ReferenceField source="categoryId" reference="categories" label="Catégorie">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="date" label="Date" />
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
            <ReferenceInput source="categoryId" reference="categories" label="Catégorie">
                <SelectInput optionText="name" fullWidth />
            </ReferenceInput>
            <DateInput source="date" label="Date de réalisation" />
            <ArrayInput source="images" label="Images (URLs)">
                <SimpleFormIterator inline>
                    <TextInput source="" hiddenLabel fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const ProjectCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" label="Titre" fullWidth />
            <TextInput source="description" label="Description" multiline fullWidth />
            <ReferenceInput source="categoryId" reference="categories" label="Catégorie">
                <SelectInput optionText="name" fullWidth />
            </ReferenceInput>
            <DateInput source="date" label="Date de réalisation" />
            <ArrayInput source="images" label="Images (URLs)">
                <SimpleFormIterator inline>
                    <TextInput source="" hiddenLabel fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
