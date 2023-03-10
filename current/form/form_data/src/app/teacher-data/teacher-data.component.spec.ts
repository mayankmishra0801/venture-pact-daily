import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDataComponent } from './teacher-data.component';

describe('TeacherDataComponent', () => {
  let component: TeacherDataComponent;
  let fixture: ComponentFixture<TeacherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
