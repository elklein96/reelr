import { Component } from '@angular/core';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'reelr-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'reelr';
  showModal: Boolean = false;

  constructor(private authService: AuthService) { }

  modalDeleted(evt) {
    this.showModal = false;
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }
}
