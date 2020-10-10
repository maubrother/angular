import { Component, OnInit } from '@angular/core';
//importar el modelo
import { Profesor } from '../model/profesor';
import { Estudiante } from '../model/estudiante'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  //propiedades del componente
  public title: string;
  public prof: Profesor;
  public mostrarProf: boolean;
  public estudiantes: Array<Estudiante>;

  constructor() { 
    this.title = 'Componente Curso';
    this.prof = new Profesor('Juan',6500,true);
    this.mostrarProf = true;
    this.estudiantes = [
      new Estudiante('Mateo',36,90),
      new Estudiante('Ana',38,90),
      new Estudiante('Pedro',24,52),
      new Estudiante('Lucas',18,88)
    ]
  }

  ngOnInit(): void {
    console.log(this.prof);
    console.log(this.estudiantes);
  }

  cambiarEstado(valor: boolean): void{
    this.mostrarProf = valor;
  }

}
