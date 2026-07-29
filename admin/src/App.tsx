import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { ProjectList, ProjectEdit, ProjectCreate } from './projects';

let rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
rawApiUrl = rawApiUrl.replace(/\/$/, '');
if (!rawApiUrl.endsWith('/api')) rawApiUrl += '/api';
const dataProvider = simpleRestProvider(rawApiUrl);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} />
    </Admin>
);

export default App;
