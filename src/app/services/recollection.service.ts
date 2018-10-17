import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Recollection } from '../model/recollection';
import { GetRecollections } from '../statemanagement/recollection.actions';
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

  loadRecollections() {
    this.store.dispatch(new GetRecollections());
  }
}
