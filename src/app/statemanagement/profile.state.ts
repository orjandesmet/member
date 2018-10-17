import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { tap } from 'rxjs/operators';
import { FSProfileService } from '../data/firestore/fsprofile.service';
import { Profile } from '../model/profile';
import { GetProfile, UpsertProfile } from './profile.actions';


@State<Profile>({
  name: 'profile',
})
export class ProfileState {

  @Selector() static profile(state: Profile) {
    return state;
  }

  @Action(UpsertProfile)
  upsertProfile(ctx: StateContext<Profile>, action: UpsertProfile) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.firstName = action.payload.firstName;
        draft.lastName = action.payload.lastName;
      })
    );
  }

  // Example of async actions
  @Action(GetProfile)
  getRecollections(ctx: StateContext<Profile>) {
    return this.profileService.profile$
      .pipe(
        tap(profile => ctx.dispatch(new UpsertProfile(profile))));
  }

  constructor(private profileService: FSProfileService) { }
}
