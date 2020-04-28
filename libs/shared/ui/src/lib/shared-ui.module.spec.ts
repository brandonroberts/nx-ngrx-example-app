import { async, TestBed } from '@angular/core/testing';
import { SharedUiModule } from './shared-ui.module';

describe('SharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiModule).toBeDefined();
  });
});
