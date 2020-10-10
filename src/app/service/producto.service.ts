import { Injectable } from '@angular/core';

export class ProductoService {

  //aributo que contiene productos
  public coleccionProductos = ['Arroz','Fideo','Maiz'];
  
   getProductos(): Array<string>{
     return this.coleccionProductos;
   }

   addProductos(nombreProducto: string): Array<string>{
    this.coleccionProductos.push(nombreProducto); 
    return this.coleccionProductos;
   }

   deleteProductos(index: number): Array<string> {
    this.coleccionProductos.splice(index,1);
    return this.coleccionProductos;
   }
}
