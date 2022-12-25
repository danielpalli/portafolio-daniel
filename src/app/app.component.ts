import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ],
})
export class AppComponent implements OnChanges{
  destino?: string;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    document.getElementById(`${this.destino}`)?.scrollIntoView;
  }

}
