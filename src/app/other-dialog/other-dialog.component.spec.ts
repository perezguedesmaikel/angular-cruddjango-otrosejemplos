import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDialogComponent } from './other-dialog.component';

describe('OtherDialogComponent', () => {
  let component: OtherDialogComponent;
  let fixture: ComponentFixture<OtherDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDialogComponent]
    });
    fixture = TestBed.createComponent(OtherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
