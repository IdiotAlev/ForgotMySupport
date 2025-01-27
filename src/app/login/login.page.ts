import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,//agrupa los campos del formulario
  FormControl,//crea los campos del formulario
  Validators,//validadores de los campos
  FormBuilder//constructor de la clase formulario
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
//constructor de la clase formulario de login
export class LoginPage implements OnInit {
  //variable que maneja el formulario
  formularioLogin: FormGroup;
  //variable que maneja el mensaje de error
  errorMessage:any;
  //Mensajes de error
  formErrors={
    //Mensaje de error del campo email
    email:[
      {type: "required",message: "El email es requerido"},
      {type: "email",message: "El email no es valido"}
    ],
    //Mensaje de error del campo contrasena
    pss:[
      {type: "required",message: "El email es requerido"},
      {type: "email",message: "El email no es valido"}
    ]


  }
  constructor(private fb: FormBuilder,private router: Router) {
    this.formularioLogin = this.fb.group({
      //se crean la variable email de los campos del formulario
      'email': new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      //se crean la variable contrasena de los campos del formulario
      'pws': new FormControl("", Validators.compose([
        //validadores de los campos
        Validators.required,
        Validators.minLength(8)
      ])),
  });
  }
  
  ngOnInit() {
  }

  goRegistro(){
    this.router.navigate(['/registro']);
  }

  ingresar(credentials:any){ {
    console.log(credentials, "Credenciales");

      
  }  
  }  

}
