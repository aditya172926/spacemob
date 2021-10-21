import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UserService]
})
export class LoginPage implements OnInit {
  userId;
  input;
  pmovies;
  title = 'Web';
  registerInput;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerInput = {
      username: '',
      first_name: '',
      last_name: '',
      password: '',
      email: ''
    };
    this.input = {
      username: '',
      password: ''
      // email: ''
    };
  }
  onRegister() {
    this.userService.registerNewUser(this.registerInput).subscribe(
      response => {
        console.log('Created username: ', this.registerInput.username);
        this.input.username = response.data.username;
        this.input.password = response.data.password;
        this.onLogin();
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log('Logged In username: ', this.input.username);
        localStorage.setItem('access_token', response.token);
        localStorage.setItem('user_id', response.user_id);
        this.router.navigate(['/index']);
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
