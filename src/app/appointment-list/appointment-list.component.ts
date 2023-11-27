import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  title :string = 'Appointment List'; // <-- Add this line
  message :string= 'Hello ' ;
  items : string[] = ['item1', 'item2', 'item3'];
  log(){
    console.log('hello');
  }
  name(text:string, name:string) : void{
    var message = this.message + name ;
    var message2 = 'Message' + text;
    console.log(message);
    console.log(message2);
  }

  
}
