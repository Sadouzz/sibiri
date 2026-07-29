import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { ProjectList, ProjectEdit, ProjectCreate } from './projects';
import { CategoryList, CategoryEdit, CategoryCreate } from './categories';

let rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
rawApiUrl = rawApiUrl.replace(/\/$/, '');
if (!rawApiUrl.endsWith('/api')) rawApiUrl += '/api';
const dataProvider = simpleRestProvider(rawApiUrl);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} />
        <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
    </Admin>
);

export default App;
