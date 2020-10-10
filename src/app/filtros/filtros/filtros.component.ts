import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  public title: string;
  public fecha: Date;
  constructor() { 
    this.title = "Filtros angular";
    this.fecha = new Date();
  }

  

  ngOnInit(): void {
  }

}
