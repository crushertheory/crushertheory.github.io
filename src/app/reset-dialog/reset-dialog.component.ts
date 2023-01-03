import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.scss']
})
export class ResetDialogComponent {

  public restartGame() {
    location.reload()
  }
}
