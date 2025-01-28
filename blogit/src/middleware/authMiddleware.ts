import { verify } from "hono/jwt";
import { MiddlewareHandler } from "hono";

const authMiddleware  : MiddlewareHandler = async (c,next) => {
    const authHeader = c.req.header('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return c.json({ message: 'Unauthorized' }, 401);
    }

    try{
        const token = authHeader.split(' ')[1] || "";
        const payload = await verify(token,c.env.SECRET_KEY);
        if(payload){
            c.set('user', payload);
            await next();
        }
       
        else{
            return c.text('Unauthorized',401);
       }
        
    }
    catch(e){
        c.status(401);
        return c.text('Unauthorized',401);
    }

}
export default authMiddleware;