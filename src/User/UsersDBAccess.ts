import * as Nedb from 'nedb';

export class UsersDBAccess {
  private nedb: Nedb;

    constructor(){
    this.nedb = new Nedb('database/Users.db');
    this.nedb.loadDatabase();
    }

    public async putUser(user: User){
      return new Promise((resolve, reject) => {
        this.nedb.insert(user, (err: Error) => {
          if (err) {
            reject(err);
            
          }else{
            resolve();
          }
        })
      });
    }
}