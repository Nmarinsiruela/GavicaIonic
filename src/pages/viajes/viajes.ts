import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-viajes',
  templateUrl: 'viajes.html'
})
export class ViajesPage {
  inputAge: number;
  constructor(public navCtrl: NavController, private storage: Storage) {  }

  createDB(){
    // set a key/value
    this.storage.set('name', 'Max');
    this.storage.set('age', '35');    
  }

  readDB(){
    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });

    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }

  eraseDB(){
    this.storage.clear();
  }
  
  updateDB(value) {
    this.storage.set('age', value);
  }
}
