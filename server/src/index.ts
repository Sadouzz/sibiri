import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(cors({ exposedHeaders: ['Content-Range'] }));
app.use(express.json());

// Routes react-admin
app.get('/api/projects', async (req, res) => {
  try {
    const { _sort, _order, _start, _end, title, category } = req.query;
    
    // Pagination
    const skip = _start ? parseInt(_start as string) : 0;
    const take = _end ? parseInt(_end as string) - skip : 50;

    // Sort
    const orderBy = _sort ? { [_sort as string]: (_order as string).toLowerCase() } : { id: 'desc' };
    
    // Filter
    let where: any = {};
    if (title) where.title = { contains: title as string };
    if (category) where.category = category as string;

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        skip,
        take,
        orderBy,
        where
      }),
      prisma.project.count({ where })
    ]);

    res.set('Content-Range', `projects ${skip}-${skip + projects.length}/${total}`);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) }
    });
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const { title, description, category, image } = req.body;
    const project = await prisma.project.create({
      data: { title, description, category, image }
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, image } = req.body;
    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: { title, description, category, image }
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.delete({
      where: { id: parseInt(id) }
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`API Server listening at http://localhost:${port}`);
  });
}

export default app;
