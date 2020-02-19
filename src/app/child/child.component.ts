import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // loggedIn:false;
  @Input() loggedIn:boolean;
  //parent to child
  message:string;
  private _log:boolean;
  get log():boolean{
    return this.log;
  }
  @Input()
  set log(value:boolean){
    this.log=value;
    if(value===true){
      this.message="Welcome back";
    }
    else{
      this.message="please login";
    }
  }
  //child to parent
  name='Roshni';
  greet(){
    alert("Hey Roshni");
  }
  
  

  constructor() { }

  ngOnInit() {
  }
  

}
