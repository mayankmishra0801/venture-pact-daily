import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecComponent } from './changec.component';

describe('ChangecComponent', () => {
  let component: ChangecComponent;
  let fixture: ComponentFixture<ChangecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
