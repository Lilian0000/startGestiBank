import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesSuccessComponent } from './demandes-success.component';

describe('DemandesSuccessComponent', () => {
  let component: DemandesSuccessComponent;
  let fixture: ComponentFixture<DemandesSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
