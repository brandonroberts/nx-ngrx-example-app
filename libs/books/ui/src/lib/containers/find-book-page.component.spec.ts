import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { FindBookPageActions, BooksFeature } from '@ngrxdev/shared/state/books';
import {
  BookAuthorsComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
} from '../components';
import { FindBookPageComponent } from '../containers';
// import { AddCommasPipe } from '@example-app/shared/pipes/add-commas.pipe';
// import { EllipsisPipe } from '@example-app/shared/pipes/ellipsis.pipe';
import { MaterialModule } from '../material.module';

describe('Find Book Page', () => {
  let fixture: ComponentFixture<FindBookPageComponent>;
  let store: MockStore;
  let instance: FindBookPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MaterialModule,
        ReactiveFormsModule,
      ],
      declarations: [
        FindBookPageComponent,
        BookSearchComponent,
        BookPreviewComponent,
        BookPreviewListComponent,
        BookAuthorsComponent,
        // AddCommasPipe,
        // EllipsisPipe,
      ],
      providers: [
        provideMockStore({
          selectors: [
            { selector: BooksFeature.selectSearchQuery, value: '' },
            { selector: BooksFeature.selectSearchResults, value: [] },
            { selector: BooksFeature.selectSearchLoading, value: false },
            { selector: BooksFeature.selectSearchError, value: '' },
          ],
        }),
      ],
    });

    fixture = TestBed.createComponent(FindBookPageComponent);
    instance = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a book.Search action on search', () => {
    const $event = 'book name';
    const action = FindBookPageActions.searchBooks({ query: $event });

    instance.search($event);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
