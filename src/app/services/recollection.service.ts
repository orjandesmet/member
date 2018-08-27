import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FSRecollectionService } from '../data/firestore/fsrecollection.service';
import { createRecollection, Recollection } from '../model/recollection';
import { AddRecollection, GetRecollections } from '../statemanagement/recollection.actions';
import { RecollectionState } from '../statemanagement/recollection.state';

@Injectable({
  providedIn: 'root',
})
export class RecollectionService {

  // recollections$: ReplaySubject<Recollection[]> = new ReplaySubject<Recollection[]>();
  @Select(RecollectionState.recollections) recollections$: Observable<Recollection[]>;

  constructor(
    private service: FSRecollectionService,
    private store: Store,
  ) {
  }

  loadRecollections() {
    // this.service.recollections$.subscribe(this.recollections$);
    this.store.dispatch(new GetRecollections());
    this.store.dispatch(new AddRecollection(createRecollection()));
  }
}
