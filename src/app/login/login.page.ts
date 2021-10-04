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
  title: string = 'Web';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
      // email: ''
    };
  }
  onRegister() {
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been created');
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been logged in');
        localStorage.setItem('access_token', response.token);
        localStorage.setItem('user_id', response.id);
        this.router.navigate(['/index']);
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
