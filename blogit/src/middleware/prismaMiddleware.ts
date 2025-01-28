import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { MiddlewareHandler } from 'hono';

const prismaMiddleware: MiddlewareHandler = async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    c.set('prisma', prisma);
    await next();
};

export default prismaMiddleware;