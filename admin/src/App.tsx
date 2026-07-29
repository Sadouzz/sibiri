import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { ProjectList, ProjectEdit, ProjectCreate } from './projects';

const rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
const sanitizedApiUrl = rawApiUrl.replace(/\/$/, '');
const dataProvider = simpleRestProvider(sanitizedApiUrl);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} />
    </Admin>
);

export default App;
