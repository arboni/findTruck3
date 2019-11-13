import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagesCollection: AngularFirestoreCollection<any[]>;
  messages: Observable<any[]>;
  afs: AngularFirestore;

  constructor(afs: AngularFirestore) {

   }
   ngOnInit() {
    this.getChatData();
  }
  getChatData() {
    this.messagesCollection = this.afs.collection<any>('chat_messages');
    this.messages = this.messagesCollection.valueChanges();
  }

  newMessage(message: any[]) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < message.length; index++) {
      this.messagesCollection.add(message.values[index.valueOf()]);
    }
    this.messages = null;

  }
}

