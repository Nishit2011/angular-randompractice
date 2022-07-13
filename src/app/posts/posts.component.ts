import { IPost } from './post.interface';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-posts',
  template: `
  <div>Posts Component</div>
      <li (click)="onClick(post)"  *ngFor="let post of postsList; index as i">
   {{post.id}}. {{post.title}}
      </li>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _postSvc: PostService, private router: Router) { }
  public postsList: IPost[] = []

  ngOnInit() {
    this.getPosts()
  }
  

  getPosts(){
    this._postSvc.getPosts()
        .subscribe(data=>this.postsList = data)
  }

  onClick(post: IPost){
    this.router.navigate(['/posts', post.id])
  }
}
