import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.teacherMessage$.
    subscribe(
      message=>{
        if(message==='Good Morning'){
          alert('Good Morning Teacher');
        }
        else if(message==='well done'){
          alert('Thank you Teacher');
        }
      }
    );
  }

}
