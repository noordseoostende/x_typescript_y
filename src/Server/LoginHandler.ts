import { IncomingMessage, ServerResponse } from "http";

export class LoginHandler {
  req: IncomingMessage;
  res: ServerResponse;

  public constructor(req: IncomingMessage, res: ServerResponse){
    this.req = req;
    this.res = res;
  }

  public handleRequest(): void {
    
  }
}