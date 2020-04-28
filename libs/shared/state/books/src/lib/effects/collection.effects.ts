import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  CollectionApiActions,
  CollectionPageActions,
  SelectedBookPageActions,
} from '../actions';
import { Book } from '@ngrxdev/api-interfaces';
import { BookStorageService } from '@ngrxdev/books/data-access-google';


@Injectable()
export class CollectionEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the supported call in `defer` makes
   * effect easier to test.
   */
  checkStorageSupport$ = createEffect(
    () => defer(() => this.storageService.supported()),
    { dispatch: false }
  );

  loadCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CollectionPageActions.enter),
      switchMap(() =>
        this.storageService.getCollection().pipe(
          map((books: Book[]) =>
            CollectionApiActions.loadBooksSuccess({ books })
          ),
          catchError(error =>
            of(CollectionApiActions.loadBooksFailure({ error }))
          )
        )
      )
    )
  });

  addBookToCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SelectedBookPageActions.addBook),
      mergeMap(({ book }) =>
        this.storageService.addToCollection([book]).pipe(
          map(() => CollectionApiActions.addBookSuccess({ book })),
          catchError(() => of(CollectionApiActions.addBookFailure({ book })))
        )
      )
    )
  });

  removeBookFromCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SelectedBookPageActions.removeBook),
      mergeMap(({ book }) =>
        this.storageService.removeFromCollection([book.id]).pipe(
          map(() => CollectionApiActions.removeBookSuccess({ book })),
          catchError(() => of(CollectionApiActions.removeBookFailure({ book })))
        )
      )
    ) 
  });

  constructor(
    private actions$: Actions,
    private storageService: BookStorageService
  ) {}
}
