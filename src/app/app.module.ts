import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {ContadorComponent} from "./contador/contador.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {FormularioreactivoComponent} from './formularioreactivo/formularioreactivo.component';
import {MatCardModule} from "@angular/material/card";
import {NavbarComponent} from './navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {routes} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './hijo/nieto/nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ContadorComponent,
    FormularioreactivoComponent,
    NavbarComponent,
    HomeComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    NgOptimizedImage,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
