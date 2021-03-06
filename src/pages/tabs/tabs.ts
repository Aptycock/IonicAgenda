import { Component } from '@angular/core';

import { ContactosPage } from '../contactos/contactos';
import { HomePage } from '../home/home';
import { TareasPage } from '../tareas/tareas';
import { CitasPage } from '../citas/citas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactosPage;
  tab3Root = TareasPage;
  tab4Root = CitasPage;

  constructor() {

  }
}
