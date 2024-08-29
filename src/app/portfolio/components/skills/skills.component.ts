import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Skills } from '../../interfaces/information.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  private informationService = inject(InformationService);
  public data = signal<Skills[] | null>(null);

  ngOnInit() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data.skills);
    });
  }
}
