import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment4Component } from './assignment4.component';

describe('Assignment4Component', () => {
  let component: Assignment4Component;
  let fixture: ComponentFixture<Assignment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
