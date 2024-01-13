import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectStageComponent } from './create-project-stage.component';

describe('CreateProjectStageComponent', () => {
  let component: CreateProjectStageComponent;
  let fixture: ComponentFixture<CreateProjectStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
