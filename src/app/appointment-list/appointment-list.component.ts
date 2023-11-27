import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})

export class AppointmentListComponent {
  
  newAppointmentTitle : string = '';
  newAppointmentDescription : string = '';
  newAppointmentDate : Date = new Date();
  newAppointmentTime : string = '';

  //storing the appointment in an array
  appointmentsList : Appointment[] = [] ; 

  
}
