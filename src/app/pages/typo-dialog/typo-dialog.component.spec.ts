import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoDialogComponent } from './typo-dialog.component';

describe('TypoDialogComponent', () => {
  let component: TypoDialogComponent;
  let fixture: ComponentFixture<TypoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
