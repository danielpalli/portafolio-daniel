import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advance-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>advancePage works!</p>`,
  styleUrl: './advancePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdvancePageComponent { }
