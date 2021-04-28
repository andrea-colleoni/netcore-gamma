import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  selectedPost: Post;

  constructor(
    private ps: PostService,
  ) { }

  ngOnInit(): void {
    this.ps.getPosts().subscribe(p => this.posts = p);
  }

  selectPost(post: Post) {
    this.selectedPost = post;
  }

}
