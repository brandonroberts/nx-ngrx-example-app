import { async, TestBed } from '@angular/core/testing';
import { BooksDataAccessGoogleModule } from './books-data-access-google.module';

describe('BooksDataAccessGoogleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksDataAccessGoogleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BooksDataAccessGoogleModule).toBeDefined();
  });
});
