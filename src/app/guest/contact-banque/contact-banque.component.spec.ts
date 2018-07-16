import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBanqueComponent } from './contact-banque.component';

describe('ContactBanqueComponent', () => {
  let component: ContactBanqueComponent;
  let fixture: ComponentFixture<ContactBanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
