import { Action, combineReducers } from '@ngrx/store';
import * as fromAuthStatus from './auth-status.reducer';
import * as fromLoginPage from './login-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuthStatus.statusFeatureKey]: fromAuthStatus.State;
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuthStatus.statusFeatureKey]: fromAuthStatus.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action);
}