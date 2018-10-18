import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Recollection } from '../model/recollection';
import { AddRecollection, GetRecollections } from '../statemanagement/recollection.actions';
import { RecollectionState } from '../statemanagement/recollection.state';

@Injectable({
  providedIn: 'root',
})
export class RecollectionService {

  @Select(RecollectionState.recollections) recollections$: Observable<Recollection[]>;

  constructor(
    private store: Store,
  ) {
  }

  loadRecollections(): void {
    this.store.dispatch(new GetRecollections());
  }

  recollectionById(recollectionId: string): Observable<Recollection> {
    return this.store.select(RecollectionState.recollectionById(recollectionId));
  }

  addRecollection(recollection: Recollection) {
    this.store.dispatch(new AddRecollection(recollection));
  }
}
