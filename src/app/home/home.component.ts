import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

  
export class HomeComponent implements OnInit {

  constructor(private router:Router){ }
  ngOnInit(): void {
    
  }
  navegar(){
    this.router.navigate(['/login'])
  }

  logosinfondo:string="assets/imagenes/logosinfondo.png"
  logoblanco:string="assets/imagenes/logoblanco.png"
  logo:string="assets/imagenes/logo.png";

}

