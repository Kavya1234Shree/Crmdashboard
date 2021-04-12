import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusupComponent } from './statusup.component';

describe('StatusupComponent', () => {
  let component: StatusupComponent;
  let fixture: ComponentFixture<StatusupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
