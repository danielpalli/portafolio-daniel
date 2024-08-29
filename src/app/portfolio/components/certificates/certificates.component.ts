import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Certificates } from '../../interfaces/information.interface';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent implements OnInit {
  private informationService = inject(InformationService);
  public data = signal<Certificates[] | null>(null);

  ngOnInit() {
    this.informationService.getInformation().subscribe((data: any) => {
      this.data.set(data.certificates);
    });
  }
}
