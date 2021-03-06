import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDialogComponent } from './button-dialog.component';

describe('DialogComponent', () => {
  let component: ButtonDialogComponent;
  let fixture: ComponentFixture<ButtonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
