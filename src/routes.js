import Router from "koa-router";

const router = new Router();

router.get("/", (ctx, next) => {
  // ctx.body = "Hello";
  ctx.body = { message: "Hello World" };
});

export default router.routes();
