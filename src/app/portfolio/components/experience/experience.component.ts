import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Works } from '../../interfaces/information.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent implements OnInit {
  private informationService = inject(InformationService);
  public data = signal<Works | null>(null);

  ngOnInit() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data.work[0]);
    });
  }
}
