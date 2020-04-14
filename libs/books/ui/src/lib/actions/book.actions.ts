import { createAction, props } from '@ngrx/store';

import { Book } from '@ngrxdev/api-interfaces';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
