import { Component } from '@angular/core';

@Component({
  selector: 'reelr-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'reelr';
  showModal: Boolean = false;

  constructor() { }

  modalDeleted(evt) {
    this.showModal = false;
  }
}
