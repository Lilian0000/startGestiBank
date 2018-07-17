import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoChildComponent } from './meteo-child.component';

describe('MeteoChildComponent', () => {
  let component: MeteoChildComponent;
  let fixture: ComponentFixture<MeteoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
