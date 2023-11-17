import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FormularioreactivoComponent} from "./formularioreactivo/formularioreactivo.component";

export const routes: Routes = [
  {path: '', component: HomeComponent}, // Ruta para la página de inicio
  {path: 'formulario-reactivo', component: FormularioreactivoComponent} // Ruta para la página de ejemplo
];



