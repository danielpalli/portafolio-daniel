import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Basics, Profile } from '../../interfaces/information.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  private informationService = inject(InformationService);
  public data = signal<Basics | null>(null);
  public sanitizedProfiles = signal<Profile[]>([]);
  dialog = inject(MatDialog);

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data.basics);
      const profiles = data.basics.profiles;

      const sanitized = profiles.map((profile: Profile) => ({
        ...profile,
        svg: this.sanitizer.bypassSecurityTrustHtml(profile.svg) as SafeHtml,
      }));
      this.sanitizedProfiles.set(sanitized);
    });
  }

  openDialog(info: string) {
    if (info === 'phone') {
      this.dialog.open(DialogComponent, {
        data: this.data()?.phone,
      });
    }

    if (info === 'email') {
      this.dialog.open(DialogComponent, {
        data: this.data()?.email,
      });
    }

  }
}
