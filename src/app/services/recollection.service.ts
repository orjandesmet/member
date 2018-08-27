import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Recollection } from '../model/recollection';

@Injectable({
  providedIn: 'root',
})
export class RecollectionService {

  recollections$: ReplaySubject<Recollection[]> = new ReplaySubject<Recollection[]>();

  constructor() {
  }

  loadRecollections() {

  }
}
