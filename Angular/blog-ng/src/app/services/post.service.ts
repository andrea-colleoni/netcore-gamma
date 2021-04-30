import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { POSTS } from '../model/mock-posts';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiBaseUrl}/posts`)
    .pipe();
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiBaseUrl}/posts/${id}`)
    .pipe();
  }
}
