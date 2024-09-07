import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Works } from '../../interfaces/information.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  public data = input.required<Works[]>({
    alias: 'works',
  });
}
