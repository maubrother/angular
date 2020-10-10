import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Posts } from '../model/posts';

const endpoint = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private http: HttpClient
  ) { }
  findAllPost(): Observable<Posts[]>{
    return this.http.get<Posts[]>(endpoint+'posts');
  }



}
