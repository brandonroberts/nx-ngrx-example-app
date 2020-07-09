import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CollectionPageActions } from '../../../../../shared/state/books/src/lib/actions';
import {
  BookAuthorsComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
} from '../components';
import { CollectionPageComponent } from '../containers';
import * as fromBooks from '../../../../../shared/state/books/src/lib/reducers';
// import { AddCommasPipe } from '@example-app/shared/pipes/add-commas.pipe';
// import { EllipsisPipe } from '@example-app/shared/pipes/ellipsis.pipe';
import { MaterialModule } from '../material.module';

describe('Collection Page', () => {
  let fixture: ComponentFixture<CollectionPageComponent>;
  let store: MockStore;
  let instance: CollectionPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MaterialModule, RouterTestingModule],
      declarations: [
        CollectionPageComponent,
        BookPreviewListComponent,
        BookPreviewComponent,
        BookAuthorsComponent,
        // AddCommasPipe,
        // EllipsisPipe,
      ],
      providers: [
        provideMockStore({
          selectors: [{ selector: fromBooks.selectBookCollection, value: [] }],
        }),
      ],
    });

    fixture = TestBed.createComponent(CollectionPageComponent);
    instance = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a collection.Load on init', () => {
    const action = CollectionPageActions.enter();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
