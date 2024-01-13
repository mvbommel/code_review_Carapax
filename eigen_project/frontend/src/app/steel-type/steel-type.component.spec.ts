import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelTypeComponent } from './steel-type.component';

describe('SteelTypeComponent', () => {
  let component: SteelTypeComponent;
  let fixture: ComponentFixture<SteelTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteelTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
