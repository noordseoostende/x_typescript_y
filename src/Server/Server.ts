import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Authorizer } from '../Authorization/Authorizer';
import { LoginHandler } from './LoginHandler';
import { UsersHandler } from './UsersHandler';
import { Utils } from './Utils';


export class Server {

  private authorizer: Authorizer = new Authorizer();
  
  public createServer(){
    createServer(
      async (req: IncomingMessage, res: ServerResponse) => {
        console.log('geeft verzoek uit: ' + req.url);
        const basePath = Utils.getUrlBasePath(req.url);

        switch (basePath) {
          case 'login':
            await new LoginHandler(req, res, this.authorizer).handleRequest();
            break;
          case 'users':
            await new UsersHandler(req, res).handleRequest();
            break;
          default:
            break;
        }



      }
    ).listen(8080);
    console.log('server start')
  }
}