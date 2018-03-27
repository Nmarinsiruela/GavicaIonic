import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SuitcaseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'suitcase',
  templateUrl: 'suitcase.html'
})
export class SuitcaseComponent {
  maleta: any = {};
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    console.log('Hello SuitcaseComponent Component');
    let maleta = this.navParams.get('maletaID');
    this.storage.get(maleta).then((val) => {
      this.maleta = val;
      console.log(this.maleta);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaPage');
    
  }
}
