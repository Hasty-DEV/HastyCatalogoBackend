import db from "./config/database/db";
import { setupExpress } from "./loaders/Express/Express.loader";

class Server {
  public StartServer() {
    setupExpress();
    db.initDB();
  }
}

export default new Server();
