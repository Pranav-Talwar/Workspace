import { Hono } from "hono";
import { Context } from 'hono/jsx';

const app = new Hono()
const authmid = (c:any, next:any) => {
  if (c.req.header("Authorization")) {
    // Do validation
    next()
  } else {
    return c.text("You dont have acces"); 
  }
  
}

app.use(authmid)
app.post("/", async (c) => {
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header("authorization"));
    console.log(c.req.query("param"));
    return c.json({ message: "Hello Hono!" });
});

export default app;
