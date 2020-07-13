import { createReducer, on } from '@ngrx/store';

import * as LayoutActions from './layout.actions';
import { AuthActions } from '@ngrxdev/example-app/shared/state/auth';


export const layoutFeatureKey = 'layout';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(LayoutActions.closeSidenav, state => ({ showSidenav: false })),
  on(LayoutActions.openSidenav, state => ({ showSidenav: true })),
  on(AuthActions.logoutConfirmation, state => ({ showSidenav: false }))
);

export const selectShowSidenav = (state: State) => state.showSidenav;
