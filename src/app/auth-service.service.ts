import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAuthenticated() {
    let token = localStorage.getItem('access_token');
    if (token) {
      return true;
    }
    return false;
  }
}
