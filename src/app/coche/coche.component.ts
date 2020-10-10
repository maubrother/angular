import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  public title: string;
  public coche: Coche;
  public coches: Array<Coche>;

  constructor() { 
    this.title = "Componente coche";
    this.coche = new Coche('',0,'');
    this.coches = [
      new Coche('TOYOTA',45000,'#FF0000'),
      new Coche('KIA',23000,'#00FF00'),
      new Coche('NISSAN',65000,'#0000FF')
    ]
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.coche);
    this.coches.push(this.coche);
    console.log(this.coches);
    this.coche = new Coche('',0,'');
  }

}
