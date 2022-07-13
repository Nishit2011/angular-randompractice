import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  template: `<h2>
  PostId----> {{postId}}
  </h2>
  <div>
  <button (click)="goToPosts()">Back</button>
  </div>
  <button (click)="goPrevious()">Previous</button>
  <button (click)="goNext()">Next</button>
  `,
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public postId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = (this.route.snapshot.paramMap.get('id'))
    // console.log(typeof this.route.snapshot.paramMap.get('id'))
    // this.postId = id
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id')
      this.postId = Number(id)
    })
  }

  goPrevious(){
    let prevId = parseInt(this.postId)-1
    this.router.navigate(['/posts', prevId])
  }
  goNext(){
    let nextId = parseInt(this.postId) +1
    this.router.navigate(['/posts', nextId])
  }
  goToPosts(){
    let selectedId = this.postId? this.postId: null
    this.router.navigate(['/posts', {id: selectedId}])
  }

}
