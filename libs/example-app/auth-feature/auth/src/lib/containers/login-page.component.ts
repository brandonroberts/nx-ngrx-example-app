import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Credentials } from '@ngrxdev/api-interfaces';

import { LoginPageActions, selectLoginPageError, selectLoginPagePending } from '@ngrxdev/example-app/shared/state/auth';

@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    >
    </bc-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(selectLoginPagePending));
  error$ = this.store.pipe(select(selectLoginPageError));

  constructor(private store: Store) {}

  ngOnInit() {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
