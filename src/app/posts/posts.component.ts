import { IPost } from './post.interface';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
  <div>Posts Component</div>
      <div *ngFor="let post of postsList; index as i">
   {{post.id}}. {{post.title}}
      </div>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _postSvc: PostService) { }
  public postsList: IPost[] = []

  ngOnInit() {
    this.getPosts()
  }
  

  getPosts(){
    this._postSvc.getPosts()
        .subscribe(data=>this.postsList = data)
  }
}
