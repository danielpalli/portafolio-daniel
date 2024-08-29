import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Basics } from '../../interfaces/information.interface';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  private informationService = inject(InformationService);
  public data = signal<Basics | null>(null);

  ngOnInit() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data.basics);
    });
  }
}
