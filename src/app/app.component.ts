import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DentalCrown';
  logo:string="assets/imagenes/logo.png"
  dentist1:string="assets/imagenes/dentist1.jpg"
  dentist2:string="assets/imagenes/dentist2.jpg"
}