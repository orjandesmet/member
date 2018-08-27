import { Recollection } from '../model/recollection';

export class GetRecollections {
  static type = '[Recollections] Get recollections';
}

export class AddRecollection {
  static type = '[Recollections] Add recollection';
  constructor(public readonly payload: Recollection) { }
}
