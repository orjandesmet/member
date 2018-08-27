import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MOCK_RECOLLECTIONS } from '../data/mock/recollections.mock';
import { Recollection } from '../model/recollection';
import { AddRecollection, GetRecollections } from './recollection.actions';

interface RecollectionStateModel {
  ids: string[];
  entities: { [key: string]: Recollection };
};

const initialRecollectionState: RecollectionStateModel = {
  ids: [],
  entities: {},
};

@State<RecollectionStateModel>({
  name: 'recollections',
  defaults: initialRecollectionState,
})
export class RecollectionState {

  @Selector() static recollections(state: RecollectionStateModel) {
    return Object.values(state.entities);
  }

  @Action(AddRecollection)
  addRecollection(ctx: StateContext<RecollectionStateModel>, action: AddRecollection) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.ids.push(action.payload.id);
        draft.entities[action.payload.id] = action.payload;
      })
    );
  }

  // Example of async actions
  @Action(GetRecollections)
  getRecollections(ctx: StateContext<RecollectionStateModel>) {
    return of(MOCK_RECOLLECTIONS).pipe(tap(recollections =>
      ctx.setState(
        produce(ctx.getState(), draft => {
          recollections.forEach(r => {
            draft.ids.push(r.id);
            draft.entities[r.id] = r;
          });
        })
      )
    ));
  }
}
