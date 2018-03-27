import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {DATOS} from '../viajes/database';
import { SuitcaseComponent } from '../../components/suitcase/suitcase';

/*
Main Page of Travel section of Gavica.
*/ 
@Component({
  selector: 'page-viajes',
  templateUrl: 'viajes.html'
})
export class ViajesPage {
  inputAge: number;
  //datosTest: any[] = DATOS.slice(0);
  datosTest: any[] = [];
  constructor(public navCtrl: NavController, private storage: Storage) { 
    console.log(this.datosTest);
   }

  createDB(){
    // set a key/value
    console.log("Creating Basic Data");
    this.datosTest = DATOS.slice(0);
    console.log(this.datosTest);
    this.storage.set('maleta1', this.datosTest[0]);
    this.storage.set('maleta2', this.datosTest[1]);
    this.storage.set('maleta3', this.datosTest[2]);
  }

  readDB(element){
    console.log(element);
    // Or to get a key/value pair

    this.storage.get(element).then((val) => {
      console.log('Your travel is', val);
    });
  }

  eraseDB(){
    this.storage.clear();
  }
  
  updateDB(value) {
    this.storage.set('age', value);
  }

  itemTapped(element) {
    console.log(element);
    this.navCtrl.push(SuitcaseComponent, {'maletaID': element});
  }

  clearElement(id) {
    console.log('Your travel is');
    this.datosTest.splice(id, 1)
  }
}
