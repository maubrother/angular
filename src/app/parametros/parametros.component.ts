import { Component, OnInit } from '@angular/core';

import { Route,ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  public title: string;
  public nombre: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.title = 'Paso de parametros';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombre=params.get('param_nombre')
    });
  }
  redirigir1(){
    this.router.navigate(['/home']);
  }
  redirigir2(){
    this.router.navigate(['/parametros','Alejandra'])
  }

}
