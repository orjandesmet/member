import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../../model/profile';

@Injectable({
  providedIn: 'root'
})
export class FSProfileService {

  private documentPath = 'users/A06Zt6cE6PNSG0jhhLVed8iLaI73';
  private doc = this.db.doc<Profile>(this.documentPath);
  profile$ = this.doc.valueChanges();

  constructor(private db: AngularFirestore) {

  }
}
