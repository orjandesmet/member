import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';
import { GetProfile } from '../statemanagement/profile.actions';
import { ProfileState } from '../statemanagement/profile.state';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  @Select(ProfileState.profile) profile$: Observable<Profile>;

  constructor(private store: Store) { }

  loadProfile() {
    this.store.dispatch(new GetProfile());
  }
}
