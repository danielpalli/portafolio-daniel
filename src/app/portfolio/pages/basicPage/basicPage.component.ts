import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AboutComponent,
  ExperienceComponent,
  HeroComponent,
  ProjectsComponent,
  SkillsComponent,
} from '../../components';
import { SettingComponent } from '../../../shared/components/setting/setting.component';
import { InformationService } from '../../services/information.service';
import { CertificatesComponent } from "../../components/certificates/certificates.component";

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
}
