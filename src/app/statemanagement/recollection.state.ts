import { Action, Selector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { tap } from 'rxjs/operators';
import { parseChangeActionDocument } from '../data/firestore/firestore.functions';
import { FSRecollectionService } from '../data/firestore/fsrecollection.service';
import { Recollection } from '../model/recollection';
import { GetRecollections, RemoveRecollection, UpsertRecollection } from './recollection.actions';

interface RecollectionStateModel {
  ids: string[];
  entities: { [key: string]: Recollection };
}

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

  @Action(UpsertRecollection)
  addRecollection(ctx: StateContext<RecollectionStateModel>, action: UpsertRecollection) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.ids = draft.ids.includes(action.payload.id) ? draft.ids : draft.ids.concat(action.payload.id);
        draft.entities[action.payload.id] = action.payload;
      })
    );
  }

  @Action(RemoveRecollection)
  removeRecollection(ctx: StateContext<RecollectionStateModel>, action: RemoveRecollection) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.ids = draft.ids.filter(id => id !== action.payload);
        delete draft.entities[action.payload];
      })
    );
  }

  // Example of async actions
  @Action(GetRecollections)
  getRecollections(ctx: StateContext<RecollectionStateModel>) {
    return this.recollectionService.recollectionChangeActions$
      .pipe(
        tap(recollectionChangeAction => {
          switch (recollectionChangeAction.type) {
            case 'added':
            case 'modified':
              ctx.dispatch(new UpsertRecollection(parseChangeActionDocument(recollectionChangeAction)));
              break;
            case 'removed':
              ctx.dispatch(new RemoveRecollection(recollectionChangeAction.payload.doc.id));
              break;
          }
        })
      );
  }

  constructor(private recollectionService: FSRecollectionService) { }
}
