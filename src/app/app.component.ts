import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentInteraction';
  //property Binding
  url="https://angular.io/guide/component-interaction";
  //Event Binding
  count=0;

  incrementCount(){
    this.count+=1;
  }
  //Two way Binding
  username:string;

   //Separate Two way Binding
    name:string;
    greet(updatedValue){
      this.name=updatedValue;
      if(updatedValue==='Roshni')
      alert("welcome Roshni");

    }

    //by getter and setter method
    
    firstname:string;
    get firstName():string{
      return this.firstname;
    }
    set firstName(value:string){
      this.firstname=value;
    }
    greeting(updatedValue){
      this.name=updatedValue;
      if(updatedValue==='Roshni')
      alert("welcome Roshni");

    }
    //parent to child by @Input
    userloggedIn=true;
    //parent to child by using @output
    welcome(name:string){
      alert("Hello"+name);
    }

    
}
