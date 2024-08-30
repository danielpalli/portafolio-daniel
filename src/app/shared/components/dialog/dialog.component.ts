import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  data = inject(MAT_DIALOG_DATA);


}
