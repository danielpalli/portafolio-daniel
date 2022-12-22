import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionInfoComponent } from './educacion-info.component';

describe('EducacionInfoComponent', () => {
  let component: EducacionInfoComponent;
  let fixture: ComponentFixture<EducacionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
