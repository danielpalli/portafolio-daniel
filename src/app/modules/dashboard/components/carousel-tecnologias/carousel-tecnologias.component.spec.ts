import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTecnologiasComponent } from './carousel-tecnologias.component';

describe('CarouselTecnologiasComponent', () => {
  let component: CarouselTecnologiasComponent;
  let fixture: ComponentFixture<CarouselTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTecnologiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
