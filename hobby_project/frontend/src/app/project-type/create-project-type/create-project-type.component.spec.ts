import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectTypeComponent } from './create-project-type.component';

describe('CreateProjectTypeComponent', () => {
  let component: CreateProjectTypeComponent;
  let fixture: ComponentFixture<CreateProjectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
