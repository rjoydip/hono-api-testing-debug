import { Hono } from "hono";

import { instrument } from "@fiberplane/hono-otel";

const app = new Hono();

app.get("/", (c) => c.text("Hello, world!"));

export default instrument(app);