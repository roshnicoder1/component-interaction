import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {
  //child to parent by @output
  @Output() greetEvent=new EventEmitter();
   name1='Roshni Kumari';
  callParentGreet(){
    // alert("parent to child");
    this.greetEvent.emit(this.name1);

  }

  constructor() { }

  ngOnInit() {
  }

}
