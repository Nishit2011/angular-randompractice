import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-test',
  template: `<div [ngClass]="messageClasses">Hi !!!{{dataVal}}</div>
  <input type="text" value="Nishit" [disabled]= "isDisabled" [id] = "myId"/>
  <h2 [style.color]="isPresent? 'purple': 'teal'">Nishit</h2>
  <h2 [ngStyle]= "customStyle">Ranjan</h2>
  <h2 [ngStyle]= "customStyle ">Bengaluru</h2>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="isError=!isError">Change</button>
  {{greeting}}
  <button (click)="greeting='YAYA'">AnotherChange</button>
  <input #myInput type="text" />
  <button (click)="logMessage(myInput.value)">Fetch</button>
  <input [(ngModel)]="name" type="text" />
  {{name}}
  <div *ngIf="isPossible;then thenBlock; else elseBlock">
  
  </div>
  <ng-template #thenBlock>
  It is 100% possible
  </ng-template>
  <ng-template #elseBlock>
  It is not possible
  </ng-template>
  `,
  styles:[`
    .error{
      color: red
    }

    .success{
      color: green
    }
    .default{
      color: black
    }
  
  `]
})
export class TestComponent implements OnInit {
  public dataVal: any =""
  public isDisabled = false
  public myId="nishit123"
  public isError = true
  public successClass = "success"
  public errorClass= "error"
  public defaultClass= "default"
  public isPresent = false
  public greeting = ""
  public name =""
  public isPossible = true
  

  public messageClasses = {
    "error" : this.isError,
    "success": !this.isError,
   

  }

  public customStyle = {
    color: "aqua",
    fontStyle: "italic",
    
  }
  public anotherCustomStyle = {
    color: "maroon"
  }

  constructor() { }

  ngOnInit(): void {
   
  }

  onClick(event: MouseEvent){
    console.log("Greetings!!!")
    console.log(event)
    this.greeting="from click event"
  }
  logMessage(value: string){
   this.greeting = value
  }
}
