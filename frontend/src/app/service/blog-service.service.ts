import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  apiUrl="http://localhost:8081"

  constructor(
    private http: HttpClient,
  ) { }
  getProducts():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.apiUrl+"/Blogs");
  }

}
