import { createAction, props } from '@ngrx/store';

import { Book } from '../models';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
