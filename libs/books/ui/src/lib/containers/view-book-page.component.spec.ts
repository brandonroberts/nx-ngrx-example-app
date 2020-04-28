import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';

import {
  BookAuthorsComponent,
  BookDetailComponent,
} from '../components';
import { SelectedBookPageComponent } from '../containers';
import { ViewBookPageComponent } from '../containers';
import { ViewBookPageActions } from '../../../../../shared/state/books/src/lib/actions';
import * as fromBooks from '../../../../../shared/state/books/src/lib/reducers';
// import { AddCommasPipe } from '@example-app/shared/pipes/add-commas.pipe';
import { MaterialModule } from '../material.module';

describe('View Book Page', () => {
  let fixture: ComponentFixture<ViewBookPageComponent>;
  let store: MockStore;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: new BehaviorSubject({}) },
        },
        provideMockStore(),
      ],
      declarations: [
        ViewBookPageComponent,
        SelectedBookPageComponent,
        BookDetailComponent,
        BookAuthorsComponent,
        // AddCommasPipe,
      ],
    });

    fixture = TestBed.createComponent(ViewBookPageComponent);
    store = TestBed.inject(MockStore);
    route = TestBed.inject(ActivatedRoute);

    jest.spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a book.Select action on init', () => {
    const action = ViewBookPageActions.selectBook({ id: '2' });

    (route.params as BehaviorSubject<any>).next({ id: '2' });

    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });
});
