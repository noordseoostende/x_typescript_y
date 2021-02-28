import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Utils } from './Utils';


export class Server {
  
  public createServer(){
    createServer(
      (req: IncomingMessage, res: ServerResponse) => {
        console.log('geeft verzoek uit: ' + req.url);
        const basePath = Utils.getUrlBasePath(req.url);

        switch (basePath) {
          case 'login':
            new LoginHandler (req, res).handleRequest();
            break;
        
          default:
            break;
        }

        res.end();

      }
    ).listen(8080);
    console.log('server start')
  }
}