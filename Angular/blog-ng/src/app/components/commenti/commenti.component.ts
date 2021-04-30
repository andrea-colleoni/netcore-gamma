import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';

import { Comment } from '../../model/comment';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {

  @Input() postId: number;
  comments: Comment[];
  commento: Comment = undefined;

  constructor(
    private cs: CommentsService,    
  ) { }

  ngOnInit(): void {
    this.cs.getCommentiPost(this.postId).subscribe(comm => this.comments = comm);
  }

  aggiungiCommento() {
    this.commento = {
      id: 0,
      body: '',
      name: '',
      email: '',
      postId: this.postId,
    };
  }

}
