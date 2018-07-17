import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationCompteComponent } from './operation-compte.component';

describe('OperationCompteComponent', () => {
  let component: OperationCompteComponent;
  let fixture: ComponentFixture<OperationCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
