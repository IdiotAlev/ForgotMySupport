import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'pws': new FormControl("", Validators.required),
  });
  }
  
  ngOnInit() {
  }

  ingresar(){
    console.log("ingreso");
  }

}
