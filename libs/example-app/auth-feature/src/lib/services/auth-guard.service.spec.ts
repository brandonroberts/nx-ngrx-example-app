import { TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { AuthGuard } from './auth-guard.service';
import { AuthFeature, AuthSelectors } from '@ngrxdev/example-app/shared/state/auth';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('Auth Guard', () => {
  let guard: AuthGuard;
  let store: MockStore;
  let loggedIn: MemoizedSelector<AuthFeature.AuthState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, provideMockStore()],
    });

    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);

    loggedIn = store.overrideSelector(AuthSelectors.selectLoggedIn, false);
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });

    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('should return true if the user state is logged in', () => {
    const expected = cold('(a|)', { a: true });

    loggedIn.setResult(true);

    expect(guard.canActivate()).toBeObservable(expected);
  });
});
