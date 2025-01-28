import { Hono } from 'hono'
import { cors } from 'hono/cors'
import userRouter from './routes/userRoutes'
import blogRouter from './routes/blogRoutes'
import { PrismaClient } from '@prisma/client/edge'
import prismaMiddleware from './middleware/prismaMiddleware'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	},
	Variables: {
		prisma: PrismaClient
	}
}>();

app.use('*', cors());
app.use('*', prismaMiddleware);

app.get('/', (c) => {
    const prisma = c.get('prisma');
    return c.text('Hello Hono!');
});

  
app.route('/api/v1/user',userRouter);
app.route('/api/v1/blog',blogRouter);


export default app;
