import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeOuvertureCompteComponent } from './demande-ouverture-compte.component';

describe('DemandeOuvertureCompteComponent', () => {
  let component: DemandeOuvertureCompteComponent;
  let fixture: ComponentFixture<DemandeOuvertureCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeOuvertureCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeOuvertureCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
