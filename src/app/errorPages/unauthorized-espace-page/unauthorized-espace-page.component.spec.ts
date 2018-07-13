import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedEspacePageComponent } from './unauthorized-espace-page.component';

describe('UnauthorizedEspacePageComponent', () => {
  let component: UnauthorizedEspacePageComponent;
  let fixture: ComponentFixture<UnauthorizedEspacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedEspacePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedEspacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
