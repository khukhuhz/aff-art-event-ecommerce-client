import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromEcommerce from './ecommerce.reducers';

export const featureStoreKey = 'ecommerce';

enum Resource {
  ECOMMERCE = 'ecommerce',
}

export interface EcommerceState {
  [Resource.ECOMMERCE]: fromEcommerce.EcommerceState;
}

export function ecommerceReducers(
  state: EcommerceState | undefined,
  action: Action,
): EcommerceState {
  return combineReducers({
    [Resource.ECOMMERCE]: fromEcommerce.EcommerceReducers,
  })(state, action);
}

export const selectFeatureState = createFeatureSelector<EcommerceState>(featureStoreKey);
export const selectEcommerceState = createSelector(
  selectFeatureState,
  (state: EcommerceState) => state[Resource.ECOMMERCE],
);
