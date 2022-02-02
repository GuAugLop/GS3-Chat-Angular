import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  orderBy,
} from '@angular/fire/firestore';
import { query } from 'firebase/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages: Observable<DocumentData>;
  id: string;
  firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
    this.id = localStorage.getItem('id');
    if (!this.id) {
      const newId = Date.now().toString();
      localStorage.setItem('id', newId);
      this.id = newId;
    }
    const col = collection(firestore, 'messages');
    const q = query(col, orderBy('timestamp'));

    this.messages = collectionData(q);
  }

  public async sendMessage(message: string) {
    addDoc(collection(this.firestore, 'messages'), {
      user: this.id,
      message,
      timestamp: Date.now(),
    });
  }
}
