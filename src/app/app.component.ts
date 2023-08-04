import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'persona-form';
  userLogin = {
    email: '',
    password: '',
    remember: false,
  }
  onLogin() {
    console.log(this.userLogin);
  }
}
