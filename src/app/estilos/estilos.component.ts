import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  public color: string;
  constructor() {
    this.color = 'red';
   }

  ngOnInit(): void {
  }
  cambiarColor(color: string): void{
    this.color = color;
  }

}
