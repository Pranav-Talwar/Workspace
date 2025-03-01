import { Hono } from 'hono';
const app = new Hono();
app.get('/', async (c) => {
const body = await c.req.json();
console.log(body);
console.log(c.req.headers("authorization"));
console.log(c.req.query("name"));
return c.json({ message: 'Hello Hono!' });
});
app.post('/', (c) => {
    return c.text('Hello Hono!');
}
); 
export default app;
