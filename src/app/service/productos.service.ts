import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, RespuestaProducto } from '../Model/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private readonly URL_PRODUCTO = 'https://dummyjson.com/products?skip=';
  public productos: Producto[] = [];
  private skip = 30;
  private limite = 0;
  constructor(private http: HttpClient) {}

  public consultarProductos() {
    this.http
      .get<RespuestaProducto>(`${this.URL_PRODUCTO}${this.skip}`)
      .subscribe((respuesta) => {
        this.skip = this.skip + respuesta.limit;
        this.limite = respuesta.limit;
        this.productos = this.productos.concat(respuesta.products);
      });
  }
}
