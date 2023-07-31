import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAdmin from './admin.reducers';

export const featureStoreKey = 'admin';

enum Resource {
  ADMIN = 'admin',
}

export interface AdminState {
  [Resource.ADMIN]: fromAdmin.AdminState;
}

export function adminReducers(state: AdminState | undefined, action: Action): AdminState {
  return combineReducers({
    [Resource.ADMIN]: fromAdmin.AdminReducers,
  })(state, action);
}

export const selectFeatureState = createFeatureSelector<AdminState>(featureStoreKey);
export const selectAdminState = createSelector(
  selectFeatureState,
  (state: AdminState) => state[Resource.ADMIN],
);
