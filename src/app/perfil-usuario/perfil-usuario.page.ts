import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from '../Model/UsuarioLogeado';
import { Subscription } from 'rxjs';
import { ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements ViewWillEnter, ViewDidLeave {
  public usuarioActivo: UsuarioLogeado | null = null;
  private suscripcion: Subscription | null = null;

  constructor(private auth: AuthService) {}

  ionViewDidLeave(): void {
    this.suscripcion?.unsubscribe();
  }

  ionViewWillEnter(): void {
    this.auth.$usuarioActivo.subscribe((usuario) => {
      this.usuarioActivo = usuario;
    });
  }
}
