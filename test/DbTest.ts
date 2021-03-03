import {UserCredentialsDBAccess} from '../src/Authorization/UserCredentialsDBAccess';
import { UserDBAccess } from '../src/User/UserDBAccess';

class DbTest {

  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
  public userDbAccess: UserDBAccess = new UserDBAccess();
}

// new DbTest().dbAccess.putUserCredential({
//   username:'user1',
//   password: 'password1',
//   accessRights: [1, 2, 3]
// });

new DbTest().userDbAccess.putUser({
  age: 30,
  email: 'drievier@mail.com',
  id: 'retro2345',
  name: 'Jack Fgh',
  workingPosition: 3
});