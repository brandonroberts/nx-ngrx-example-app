import { async, TestBed } from '@angular/core/testing';
import { SharedStateBooksModule } from './shared-state-books.module';

describe('SharedStateBooksModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStateBooksModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedStateBooksModule).toBeDefined();
  });
});
