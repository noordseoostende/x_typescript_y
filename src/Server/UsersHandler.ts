import { Handler } from "./Model";
import { IncomingMessage, ServerResponse } from "http";
import { UsersDBAccess } from "../User/UsersDBAccess";
import { HTTP_METHODS } from "../Shared/Model";


export class UsersHandler implements Handler{

  private req: IncomingMessage;
  private res: ServerResponse;
  private usersDBAccess: UsersDBAccess();

  public constructor(req: IncomingMessage, res: ServerResponse){
    this.req = req;
    this.res = res;
  }


  async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.GET:
        await this.handleGet();
        break;
      default:
        this.handleNotFound();
        break;
    }
  }
  private async handleGet() {
    throw new Error("Method not implemented.");
  }

  private async handleNotFound(){
    this.res.statusCode = HTTP_CODES.NOT_FOUND;
    this.res.write('not found');
  }
}