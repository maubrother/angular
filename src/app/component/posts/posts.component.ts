import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Posts } from '../../model/posts'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PostsService ]
})
export class PostsComponent implements OnInit {
  
  public posts: Posts[];

  constructor(
    private _postsService: PostsService
  ) { 

  }

  ngOnInit(): void {
    this._postsService.findAllPost().subscribe(result => {
      this.posts = result;
      console.log(this.posts);
      
    });
  }

}
