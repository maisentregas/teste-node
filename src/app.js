import express from 'express';
import routes from './routes';
import './app/database/database-connection';


class App {
  constructor() {
    this.init();
    this.routes();
  };

  init() {
    this.server = express();
    this.server.use(express.json());
  };

  routes() {
    this.server.use(routes);
  };
};

export default new App().server;