import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodoComponent } from './detail-todo.component';

describe('DetailTodoComponent', () => {
  let component: DetailTodoComponent;
  let fixture: ComponentFixture<DetailTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
