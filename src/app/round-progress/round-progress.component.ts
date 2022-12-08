import { Component, Input } from '@angular/core';

@Component({
  selector: 'round-progress',
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.scss']
})
export class RoundProgressComponent {
  @Input() roundPoints!: number
}
