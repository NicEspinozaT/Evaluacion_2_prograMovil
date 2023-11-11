import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  public formularioLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, public auth: AuthService) {
    this.formularioLogin = formBuilder.group({
      user: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  public intentarLogear() {
    if (!this.formularioLogin.valid) {
      alert('Credenciales Invalidas');
      this.formularioLogin.controls['user'].setValue('');
      this.formularioLogin.controls['password'].setValue('');
      this.formularioLogin.clearAsyncValidators();
      return;
    }
    this.auth.intentarLogear(
      this.formularioLogin.controls['user'].value,
      this.formularioLogin.controls['password'].value
    );
  }

  ngOnInit() {}
}
