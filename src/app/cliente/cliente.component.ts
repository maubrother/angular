import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public titlecliente = 'Datos del Cliente';
  public nombre = 'Ana';
  public apellido = 'Gomez';
  public telefono = '70222222';
  public correo = 'ana@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
