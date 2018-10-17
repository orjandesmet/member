import { Profile } from '../model/profile';

export class GetProfile {
  static type = '[Profile] Get profile';
}

export class UpsertProfile {
  static type = '[Profile] Upsert profile';
  constructor(public readonly payload: Profile) { }
}
