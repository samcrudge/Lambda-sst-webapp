import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda'

const app = new Hono<{}>();

app.get("/", c => c.text("hello I'm live updating on an aws service. wow so cool"));

export const handler = handle(app);
