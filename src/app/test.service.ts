import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getEmployees(){
    return [
      {id:1, name: "X", age:19},
      {id:2, name: "Y", age:20},
      {id:3, name: "Z", age:21}

    ]
  }
}
