import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConseillerComponent } from './gestion-conseiller.component';

describe('GestionConseillerComponent', () => {
  let component: GestionConseillerComponent;
  let fixture: ComponentFixture<GestionConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
