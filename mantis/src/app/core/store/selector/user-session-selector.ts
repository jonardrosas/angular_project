import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInfoState, CoreModuleState } from './../states';


export const getUserInfoFn = (state: UserInfoState) => state.userInfo;

const getCoreModuleState = createFeatureSelector<CoreModuleState>('core');