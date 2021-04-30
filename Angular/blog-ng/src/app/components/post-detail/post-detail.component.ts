import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { CommentsService } from 'src/app/services/comments.service';
import { PostService } from 'src/app/services/post.service';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  user: User;

  constructor(
    private ar: ActivatedRoute,
    private ps: PostService,
    private us: UsersService,
  ) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(params => {
      const postId = +params.get('id');
      this.ps.getPost(postId).subscribe(post => {
        this.post = post;
        this.us.getUser(this.post.userId).subscribe(u => this.user = u);
      });
    });
  }

}
