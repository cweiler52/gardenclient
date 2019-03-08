import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from '../models/plant.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbProductsUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';
  private dbAuthUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';
  
  constructor(private http: HttpClient) { }

  getPlants() : Observable<Plant[]> {
    return this.http.get<Plant[]>(this.dbProductsUrl);
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.dbAuthUrl, { email: email, password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.token);
            }

            return user;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('token');
  }
};
