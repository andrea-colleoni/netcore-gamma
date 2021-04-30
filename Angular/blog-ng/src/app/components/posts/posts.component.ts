import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ps.getPosts().subscribe(p => this.posts = p);
  }

  selectPost(post: Post) {
    this.router.navigate(['post', post.id]);
    this.selectedPost = post;
  }

}
