import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import bcrypt from 'bcryptjs';
import { signinInput,signupInput } from "@100xdevs/medium-common";

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        prisma: any,
        SECRET_KEY: string
    },
    Variables: {
        prisma: any
    }
}>();

router.post('/signup',async (c) => {
    const prisma = c.get('prisma');
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    
    if(!success){
        c.status(400);
        return c.json({
            message : "Invalid input given"
        })
    }
    try{
        // Hash the password
        const hashedPassword = await bcrypt.hash(body.password, 10);
        
        const user = await prisma.user.create({
            data: {
                username:body.username,
                password: hashedPassword,
                name: body.name
            }
        })
        const payload = {
            userId : user.id,
            username : user.username
        }
        const token = await sign(payload,c.env.SECRET_KEY);
        
        // Setting the JWT token in a cookie
       /* setCookie(c, 'token', token, {
            path: '/',
            secure: false,
            httpOnly: true,
            sameSite: 'None',
        });*/
        c.status(201);
        return c.json({ message: "User created Successfully", user,token});
    }
   
    catch(e){
        c.status(411);
        console.log(e);
        return c.text("Some error has occured !! ");
    }
    
});

router.post('/signin', async (c) => {
    const prisma = c.get('prisma');
    const body = await c.req.json();
    const {username,password} = body;
    
    const {success} = signinInput.safeParse(body);

    if(!success){
        c.status(400);
        return c.json({
            message : "Invalid input given"
        })
    }

    try{
        // Find the user by username
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) {
            // User not found
            c.status(401);
            return c.text("Invalid username or password", 401);
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // Invalid password
            c.status(401);
            return c.text("Invalid username or password", 401);
        }

        // Now If User is valid, return a JWT token
        const payload = {
            userId : user.id,
            username : user.username
        };
        
        const token = await sign(payload,c.env.SECRET_KEY);

        // Setting the JWT token in a cookie
       /* setCookie(c, 'token', token, {
            path: '/',
            secure: false,
            httpOnly: true,
            sameSite: 'None',
        });*/

        c.status(200);
        return c.json({ message: "Signin successful", user,token });

    }
    catch(e){
        c.status(500);
        console.log(e);
        return c.text("An error occurred during signin", 500);
    }

})

export default router;