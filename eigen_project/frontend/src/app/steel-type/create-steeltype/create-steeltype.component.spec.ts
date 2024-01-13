import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSteeltypeComponent } from './create-steeltype.component';

describe('CreateSteeltypeComponent', () => {
  let component: CreateSteeltypeComponent;
  let fixture: ComponentFixture<CreateSteeltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSteeltypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSteeltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
