import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId!: string;
  userUrl: string = environment.url + 'user';

  constructor(private http: HttpClient) {
    this.refreshUser();
  }

  getUserAccount(): Observable<User> {
    //use this method to get the account to populate the user profile
    this.refreshUser();
    return this.http.get<User>(this.userUrl + `/${this.userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':
          'http://aloanbanks-frontend-bucket.s3-website-us-east-1.amazonaws.com',
        'Current-User': '',
      },
      withCredentials: environment.withCredentials,
    });
  }

  refreshUser = () => {
    this.userId = localStorage.getItem('current-user') || '';
  };
}
