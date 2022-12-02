import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oppenent2Component } from './oppenent2.component';

describe('Oppenent2Component', () => {
  let component: Oppenent2Component;
  let fixture: ComponentFixture<Oppenent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oppenent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oppenent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
