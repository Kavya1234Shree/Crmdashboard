import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousewareComponent } from './houseware.component';

describe('HousewareComponent', () => {
  let component: HousewareComponent;
  let fixture: ComponentFixture<HousewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
