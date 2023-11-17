import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FormularioreactivoComponent} from "./formularioreactivo/formularioreactivo.component";
import {HijoComponent} from "./hijo/hijo.component";
import {ListatareasComponent} from "./listatareas/listatareas.component";
import {ListcardComponent} from "./listcard/listcard.component";

export const routes: Routes = [
  {path: '', component: HomeComponent}, // Ruta para la página de inicio
  {path: 'formulario-reactivo', component: FormularioreactivoComponent},
  {path: 'hijo', component: HijoComponent},
  {path: 'task', component: ListatareasComponent},
  {path: 'list-task', component: ListcardComponent}
];



