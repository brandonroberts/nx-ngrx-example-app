import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutConfirmationDialogComponent } from './logout-confirmation-dialog.component';

import { MaterialModule } from '@example-app/material';

describe('Logout Confirmation Dialog', () => {
  let fixture: ComponentFixture<LogoutConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [LogoutConfirmationDialogComponent],
    });

    fixture = TestBed.createComponent(LogoutConfirmationDialogComponent);
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
