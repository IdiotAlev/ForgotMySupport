import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
  standalone: false,
})
export class PresentacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  finish() {
    console.log('Finish');
  }
}
