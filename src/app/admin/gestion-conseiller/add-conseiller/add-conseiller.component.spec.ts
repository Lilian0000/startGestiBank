import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConseillerComponent } from './add-conseiller.component';

describe('AddConseillerComponent', () => {
  let component: AddConseillerComponent;
  let fixture: ComponentFixture<AddConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
