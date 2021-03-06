import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from '../models/plant.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
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
  
  deletePlant(id: any) : Observable<Plant> {
    const deleteProductsUrl = `${this.dbProductsUrl}/${id}`;
    // console.log(deleteProductsUrl);
    return this.http.delete<Plant>(deleteProductsUrl, httpOptions);
  }

  loginUser(user) {
    return this.http.post<any>(this.dbAuthUrl, user)
      .pipe(map(user => {
         if (user && user.token) {
             localStorage.setItem('token', user.token);
         }
         return user;
      }));
  }

  logoutUser() {
      localStorage.removeItem('token');
  }
}
