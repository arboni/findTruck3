import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { UserDataService } from '../sharedUsers/user-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  insertUser(user: User) {
    this.db.list('user').push(user)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  updateUser(user: User, key: string) {
    this.db.list('user').update(key, user)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAllUsers() {
    return this.db.list('user')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  deleteUser(key: string) {
    this.db.object(`user/${key}`).remove();
  }
  editUser(key: string){
    this.db.object(`user/${key}`).set(User);
  }

}
