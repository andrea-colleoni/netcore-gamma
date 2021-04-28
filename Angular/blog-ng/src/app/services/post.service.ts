import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from '../model/mock-posts';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private mockPosts = POSTS;

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.mockPosts);
  }
}
