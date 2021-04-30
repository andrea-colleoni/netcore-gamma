import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  getCommentiPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiBaseUrl}/posts/${postId}/comments`)
    .pipe();
  }
  
}
