import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeClientToConseillerComponent } from './attribute-client-to-conseiller.component';

describe('AttributeClientToConseillerComponent', () => {
  let component: AttributeClientToConseillerComponent;
  let fixture: ComponentFixture<AttributeClientToConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeClientToConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeClientToConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
