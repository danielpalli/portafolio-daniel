import { TestBed } from '@angular/core/testing';
import BasicPageComponent from './basicPage.component';
import { provideHttpClient } from '@angular/common/http';
import { InformationService } from '../../services/information.service';
import { Information } from '../../interfaces/information.interface';

describe('BasicPageComponent', () => {
  let informationService: InformationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPageComponent],
      providers: [provideHttpClient(), InformationService],
    }).compileComponents();
    informationService = TestBed.inject(InformationService);
  });

  it('Debe crear el componente BasicPageComponent', () => {
    const fixture = TestBed.createComponent(BasicPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe obtener la información del servicio', () => {
    expect(informationService.getInformation()).toBeTruthy();
  });

  describe('Obtener la información del servicio', () => {
    it('Debe obtener la información del servicio', () => {
      const info: Information = {
        basics: {
          name: 'John Doe',
          label: 'Programmer',
          picture: '',
          email: ' [email protected]',
          url: 'https://johndoe.com',
          phone: '123456789',
          summary: '',
          location: {
            city: '',
            countryCode: '',
            country: '',
          },
          profiles: [],
        },
        skills: [],
        works: [
          {
            company: '',
            position: '',
            website: '',
            startDate: '',
            endDate: '',
            summary: '',
            stack: [],
          },
        ],
        projects: [],
        certificates: [],
      };
      expect(informationService.getInformation()).toEqual(info);
    });
  });



});
