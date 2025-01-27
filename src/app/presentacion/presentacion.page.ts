import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
  standalone: false,
})
export class PresentacionPage implements OnInit {

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();  
  }

  finish() {
    console.log('Finish');
    this.storage.set('IntroVista', true);

  }
}
