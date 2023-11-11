import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../service/productos.service';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements ViewDidEnter {
  constructor(public prodServ: ProductosService) {}

  ionViewDidEnter(): void {
    this.prodServ.consultarProductos();
  }
}
