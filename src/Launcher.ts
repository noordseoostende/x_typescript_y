import { Server } from './Server/Server';

class Laucher {
  private name: string;
  private server: Server;
  constructor() {
    this.server = new Server();
  }
  public launchApp() {
    console.log('Het werkt');
    this.server.createServer();
  }
}
new Laucher().launchApp();