import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('access_token') });
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  registerNewUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register/', userData, {headers: this.httpHeaders});
  }

  loginUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/', userData);
  }

  logoutUser(id): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/logout/', id, {headers:this.authHeaders, responseType: 'text' as 'json'});
  }

  getUsers(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/' + id + '/', {headers: this.authHeaders});
  }
  getUpdatedUsers(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/data', {headers: this.authHeaders});
  }
  postUpdateUsers(data): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/data/', data, {headers: this.authHeaders});
  }
  putUpdateUsers(data): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/data/' + 'AdityaS' + '/', data, {headers: this.authHeaders});
  }
}
