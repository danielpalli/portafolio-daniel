import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiInfoComponent } from './mi-info.component';

describe('MiInfoComponent', () => {
  let component: MiInfoComponent;
  let fixture: ComponentFixture<MiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
