import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oppenent1Component } from './oppenent1.component';

describe('Oppenent1Component', () => {
  let component: Oppenent1Component;
  let fixture: ComponentFixture<Oppenent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oppenent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oppenent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
