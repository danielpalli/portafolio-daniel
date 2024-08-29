import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Projects } from '../../interfaces/information.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  private informationService = inject(InformationService);
  public data = signal<Projects[] | null>(null);

  ngOnInit() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data.projects);
    });
  }
}
