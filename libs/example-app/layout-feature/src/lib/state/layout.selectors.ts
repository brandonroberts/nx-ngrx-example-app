import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLayout from './layout.reducer';

/**
 * Layout Reducers
 */
export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectShowSidenav = createSelector(
  selectLayoutState,
  fromLayout.selectShowSidenav
);