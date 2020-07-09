import { async, TestBed } from '@angular/core/testing';
import { ExampleAppSharedStateBooksModule } from './example-app-shared-state-books.module';

describe('ExampleAppSharedStateBooksModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExampleAppSharedStateBooksModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExampleAppSharedStateBooksModule).toBeDefined();
  });
});
