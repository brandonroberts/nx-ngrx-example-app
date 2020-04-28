import { ChangeDetectionStrategy, Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { FindBookPageActions, BooksFeature } from '@ngrxdev/shared/state/books';
import { Book } from '@ngrxdev/api-interfaces';

@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search
      [query]="searchQuery$ | async"
      [searching]="loading$ | async"
      [error]="error$ | async"
      (search)="search($event)">
    </bc-book-search>
    <bc-book-preview-list
      [books]="books$ | async">
    </bc-book-preview-list>
  `,
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store) {
    this.searchQuery$ = store.pipe(
      select(BooksFeature.selectSearchQuery),
      take(1)
    );
    this.books$ = store.pipe(select(BooksFeature.selectSearchResults));
    this.loading$ = store.pipe(select(BooksFeature.selectSearchLoading));
    this.error$ = store.pipe(select(BooksFeature.selectSearchError));
  }

  search(query: string) {
    this.store.dispatch(FindBookPageActions.searchBooks({ query }));
  }
}
