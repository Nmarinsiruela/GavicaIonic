import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  maleta: any;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello SuitcaseComponent Component');
    let maleta = this.navParams.get('maletaID');
    this.maleta = JSON.stringify(maleta);
    console.log(this.maleta);
    this.text = 'Hello World';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaPage');
    
  }
}
