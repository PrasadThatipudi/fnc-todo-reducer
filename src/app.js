import { Hono } from "hono";

const serveTodos = (ctx) => {
  return ctx.json(ctx.get("todos") ?? null, 200);
};

const setAppContext = (appContext) => (ctx, next) => {
  ctx.set("todos", appContext.todos);

  return next();
};

const createApp = (appContext) => {
  const app = new Hono();

  app.use(setAppContext(appContext));
  app.get("/todos", serveTodos);

  return app;
};

export default createApp;
