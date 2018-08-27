import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { FSRecollectionService } from '../data/firestore/fsrecollection.service';
import { Recollection } from '../model/recollection';

@Injectable({
  providedIn: 'root',
})
export class RecollectionService {

  recollections$: ReplaySubject<Recollection[]> = new ReplaySubject<Recollection[]>();

  constructor(private service: FSRecollectionService) {
  }

  loadRecollections() {
    this.service.recollections$.subscribe(this.recollections$);
  }
}
