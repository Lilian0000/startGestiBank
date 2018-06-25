import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeClientsComponent } from './attribute-clients.component';

describe('AttributeClientsComponent', () => {
  let component: AttributeClientsComponent;
  let fixture: ComponentFixture<AttributeClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
