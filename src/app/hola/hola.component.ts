import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  //propiedades 
  public title = 'Componente Hola Mundo';
  public nombre = 'Mauricio Limachi';
  //constructor
  constructor() { }

  //funciona a ejecutar por defecto
  ngOnInit(): void {
  }

}
