import { TestBed } from '@angular/core/testing';
import BasicPageComponent from './basicPage.component';
import { provideHttpClient } from '@angular/common/http';

describe('BasicPageComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPageComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BasicPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
