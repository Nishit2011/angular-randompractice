import { IPost } from './post.interface';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router"

@Component({
  selector: 'app-posts',
  template: `
  <div>Posts Component</div>
      <li (click)="onClick(post)" [class.selected]="isSelected(post)"  *ngFor="let post of postsList; index as i">
   {{post.id}}. {{post.title}}
      </li>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postId: number=0;
  constructor(private _postSvc: PostService, private router: Router, private route: ActivatedRoute) { }
  public postsList: IPost[] = []

  ngOnInit() {
   this.getPosts();
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id')
      this.postId = Number(id)
    })
  }
  

  getPosts(){
    this._postSvc.getPosts()
        .subscribe(data=>this.postsList = data)
  }

  onClick(post: IPost){
    this.router.navigate(['/posts', post.id])
  }
isSelected(post: IPost){
  return post.id === this.postId
}

}
