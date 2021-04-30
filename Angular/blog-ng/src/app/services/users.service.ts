import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }
  
  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.apiBaseUrl}/users/${userId}`)
    .pipe();
  }

}
