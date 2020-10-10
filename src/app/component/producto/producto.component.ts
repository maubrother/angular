import { Component, OnInit } from '@angular/core';
// importar servicios
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {
  
  public title : string;
  public listarProductos: Array<string>;
  public nombreProducto: string;

  constructor(
    private productoService: ProductoService
    ) {
    this.title = "Gestion de Productos";
  }
  ngOnInit(): void {
    //llamar al servicio
    this.listarProductos = this.productoService.getProductos();
    console.log(this.listarProductos);
  }
  guardarProducto(){
    this.productoService.addProductos(this.nombreProducto);
    this.nombreProducto = null;
  }
  eliminarProducto(index: number){
    if (confirm('Esta seguro de elimnar el producto?')) {
      this.productoService.deleteProductos(index);      
    }
    

  }
}
