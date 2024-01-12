import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagenprincipal',
  templateUrl: './imagenprincipal.component.html',
  styleUrls: ['./imagenprincipal.component.css']
})
export class ImagenprincipalComponent implements OnInit{

  constructor(private router:Router){ }
  ngOnInit(): void {
    this.startImageSlider();
    
  }
  navegar(){
    this.router.navigate(['/login'])
  }
  images: string[]=[
    'assets/imagenes/dentist2.jpg',
    'assets/imagenes/dentist4.jpg',
    'assets/imagenes/consultorio-dentistas.jpeg'
  ];

  logoblanco:string="assets/imagenes/logoblanco.png"
  logo:string="assets/imagenes/logo.png";



  currentImageIndex: number = 0;

  startImageSlider() {
    setInterval(() => {
      this.showNextImage();
    }, 3000); // Cambia de imagen cada 3 segundos (3000 milisegundos)
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

}

