import { async, TestBed } from '@angular/core/testing';
import { ExampleAppSharedUiModule } from './example-app-shared-ui.module';

describe('ExampleAppSharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExampleAppSharedUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExampleAppSharedUiModule).toBeDefined();
  });
});
