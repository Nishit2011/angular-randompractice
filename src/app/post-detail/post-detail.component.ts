import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  template: `PostId----> {{postId}}`,
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public postId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = (this.route.snapshot.paramMap.get('id'))
    console.log(typeof this.route.snapshot.paramMap.get('id'))
    this.postId = id
  }

}
