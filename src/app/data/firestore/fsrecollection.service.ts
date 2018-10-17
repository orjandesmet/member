import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { mergeMap, tap } from 'rxjs/operators';
import { Recollection } from '../../model/recollection';

@Injectable({
  providedIn: 'root'
})
export class FSRecollectionService {

  private collectionPath = 'users/A06Zt6cE6PNSG0jhhLVed8iLaI73/recollections';
  private collection: AngularFirestoreCollection<Recollection> = this.db.collection<Recollection>(this.collectionPath);
  recollections$ = this.collection.valueChanges()
    .pipe(tap(values => values.forEach(v => console.log(v.id, v.itemName))));

  recollectionChangeActions$ = this.collection.stateChanges()
    .pipe(mergeMap(changeActions => changeActions));

  constructor(private db: AngularFirestore) {

  }
}
