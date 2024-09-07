import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  AboutComponent,
  ExperienceComponent,
  HeroComponent,
  ProjectsComponent,
  SkillsComponent,
} from '../../components';
import { SettingComponent } from '../../../shared/components/setting/setting.component';
import { InformationService } from '../../services/information.service';
import { CertificatesComponent } from '../../components/certificates/certificates.component';
import { Information } from '../../interfaces/information.interface';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    SettingComponent,
    CertificatesComponent,
  ],
  templateUrl: './basicPage.component.html',
  styleUrl: './basicPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  private informationService = inject(InformationService);

  public data = signal<Information>({
    basics: {
      name: '',
      label: '',
      picture: '',
      email: '',
      url: '',
      phone: '',
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
  });

  constructor() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data);
    });
  }
}
