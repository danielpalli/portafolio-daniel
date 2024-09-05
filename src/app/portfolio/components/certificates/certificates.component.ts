import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Certificates } from '../../interfaces/information.interface';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent {
  public data = input.required<Certificates[]>({
    alias: 'certificates',
  });
}
