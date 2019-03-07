import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from '../models/plant.model';
import { Observable } from 'rxjs';

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
}
