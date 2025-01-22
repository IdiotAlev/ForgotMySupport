import { Component, OnInit } from '@angular/core';
import{ 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'pws': new FormControl("", Validators.required),
      'pws2': new FormControl("", Validators.required),
    });
  }
  
  ngOnInit() {
  }

  registrarse(){
    console.log("registro");
  }

}
