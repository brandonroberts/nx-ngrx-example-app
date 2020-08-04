import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromAuthStatus from './auth-status.reducer';
import * as fromLoginPage from './login-page.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State, fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  state => state.status
);
export const selectUser = createSelector(
  selectAuthStatusState,
  fromAuthStatus.getUser
);
export const selectLoggedIn = createSelector(selectUser, user => !!user);

export const selectLoginPageState = createSelector(
  selectAuthState,
  state => state.loginPage
);
export const selectLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const selectLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
