import { Component, OnInit } from '@angular/core';
import{ 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController){
      this.formularioRegistro = this.fb.group({
        'nombre': new FormControl("", Validators.required),
        'apellido': new FormControl("", Validators.required),
        'email': new FormControl("", Validators.required),
        'pass': new FormControl("", Validators.required),
        'pass2': new FormControl("", Validators.required),
      
    });
  }
  
  ngOnInit() {
  }

  async registrarse(){
    console.log("registro");
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      console.log("invalido");
      const alert = await this.alertController.create({
        header: 'Erro de registro',
        subHeader: 'Error 1',
        message: 'Tienes q llenar todos los campos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;

    }else{
      //Validaciones del formulario
      console.log("valido");
      //si las contraseñas no son iguales
      if(f.pws != f.pws2){  
      }

    }
    
    var user = {
      nombre: f.nombre,
      psw: f.pws
    }

    localStorage.setItem('usuario', JSON.stringify(user));

    
  }
}
