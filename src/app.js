import Koa from "koa";
import routes from "./routes";

class App {
  constructor() {
    this.server = new Koa();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
