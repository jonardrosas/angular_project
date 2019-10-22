import { ActionReducerMap } from '@ngrx/store';
import { CoreModuleState } from './../states';

import * as fromSessionReducer from './core-reducer';

export const reducers: ActionReducerMap<CoreModuleState> = {
    sessionState: fromSessionReducer.reducer
};
