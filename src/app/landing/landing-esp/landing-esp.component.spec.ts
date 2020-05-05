import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEspComponent } from './landing-esp.component';

describe('LandingEspComponent', () => {
  let component: LandingEspComponent;
  let fixture: ComponentFixture<LandingEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
