import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Basics } from '../../interfaces/information.interface';
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
export class HeroComponent {
  public data = input.required<Basics>({
    alias: 'basics',
  });
  public dialog = inject(MatDialog);

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
