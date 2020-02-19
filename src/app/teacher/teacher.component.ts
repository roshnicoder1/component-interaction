import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service:ServiceService) { }
  greetStudent(){
    this.service.sendMessage('Good Morning');

  }
  appreciateStudent(){
    this.service.sendMessage('well done');

  }

  ngOnInit() {
  }

}
