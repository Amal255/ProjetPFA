import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl="http://localhost:8081"

  constructor(
    private http: HttpClient,
  ) { }
  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl+"/products");
  }

  
}
