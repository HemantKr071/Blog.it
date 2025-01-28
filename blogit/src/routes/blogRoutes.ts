import { Hono } from "hono";
import authMiddleware from "../middleware/authMiddleware";

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        prisma: any,
        SECRET_KEY: string
    },
    Variables: {
        prisma: any
        user:any
    }
}>();

// Any request coming on blogRoutes should be authenticated
router.use('*',authMiddleware);

// Create a blog
router.post('/create', async (c) => {
    const prisma = c.get('prisma');
    const body = await c.req.json();
    const user = c.get('user'); // Retrieve the user information from the context
    
    try{
        const blog = await prisma.blog.create({
            data : {
                title:body.title,
                content:body.content,
                authorId: user.userId,
                published:true,
            }
        });
    
        c.status(201);
        return c.json({message:"Blog created successfully",blog});

    }
    catch(e){
        c.status(500);
        console.log(e);
        return c.text("An error has occured while creating blog");
    }    
})

// Update a blog
router.put('/update/:id', async (c) => {
    const prisma = c.get('prisma');
    const body = await c.req.json();
    const id = c.req.param("id");
    
    try{
        const blog = await prisma.blog.update({
            where : {
                id
            },
            data : {
                title:body.title,
                content:body.content,
            }
        });
        
        c.status(200);
        
        return c.json({
            message: "Blog updated successfully",
            blog
        });

    }
    catch(e){
        c.status(500);
        console.log(e);
        return c.text("An error has occured while updating blog");

    }
    
})

// Delete a blog
router.delete('/delete/:id', async (c) => {
    const prisma = c.get('prisma');
    const id = c.req.param("id");
    
    try{
        await prisma.blog.delete({
            where : {
                id
            },
        });
        
        c.status(200);
        
        return c.json({
            message: "Blog deleted successfully",
        });

    }
    catch(e){
        c.status(500);
        console.log(e);
        return c.text("An error has occured while deleting blog");

    }
    
})

// Get all blogs | Pagination added
router.get('/bulk', async (c) => {
    const prisma = c.get('prisma');
    const page = parseInt(c.req.query('page') || '1', 10);
    const pageSize = parseInt(c.req.query('pageSize') || '10', 10);

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const blogs = await prisma.blog.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            },
            createdAt:true
        },
        skip,
        take,
    });

    const totalBlogs = await prisma.blog.count();

    return c.json({
       
        totalBlogs,
        totalPages: Math.ceil(totalBlogs / pageSize),
        blogs
    });
});

// Get my blogs
router.get('/myblogs',async (c) => {
    const prisma = c.get('prisma');
    const user = c.get('user'); 

    try{
        const blogs = await prisma.blog.findMany({
            where : {
                authorId:user.userId,
            },
            select : {
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                },
                createdAt:true
            }
        });
        
        c.status(200);
        
        return c.json({
            message: "Blogs fetched successfully",
            blogs
        });

    }
    catch(e){
        c.status(500);
        console.log(e);
        return c.text("An error has occured while fetching blog");

    }
})

// Get a blog using blog id
router.get('/:id', async (c) => {
    const prisma = c.get('prisma');
    const id = c.req.param("id");
    
    try{
        const blog = await prisma.blog.findFirst({
            where : {
                id
            },
            select : {
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                },
                createdAt:true
            }
        });
        
        c.status(200);
        
        return c.json({
            blog
        });

    }
    catch(e){
        c.status(500);
        console.log(e);
        c.text("An error has occured while fetching blog");

    }
    
})



export default router;
