import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ViajesPage } from '../viajes/viajes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ViajesPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
