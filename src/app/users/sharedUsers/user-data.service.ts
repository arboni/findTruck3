import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userSource = new BehaviorSubject({ user: null, key: '' });
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: User, key: string) {
    this.userSource.next({ user, key });
  }
}
