import { Recollection } from '../model/recollection';

export class GetRecollections {
  static type = '[Recollections] Get recollections';
}

export class UpsertRecollection {
  static type = '[Recollections] Upsert recollection';
  constructor(public readonly payload: Recollection) { }
}

export class RemoveRecollection {
  static type = '[Recollections] Remove recollection';
  constructor(public readonly payload: string) { }
}

export class AddRecollection {
  static type = '[Recollections] Create recollection';
  constructor(public readonly payload: Recollection) { }
}
