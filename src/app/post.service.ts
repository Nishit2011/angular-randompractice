import { Injectable } from '@angular/core';
import { Observable, pipe,  throwError } from 'rxjs';
import { IPost } from './posts/post.interface';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url)
                    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => error || "Server Error");
  }
}
