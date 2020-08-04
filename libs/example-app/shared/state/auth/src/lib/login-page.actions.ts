import { createAction, props } from '@ngrx/store';
import { Credentials } from '@ngrxdev/api-interfaces';


export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
