import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers1Component } from './customers1.component';

describe('Customers1Component', () => {
  let component: Customers1Component;
  let fixture: ComponentFixture<Customers1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customers1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
