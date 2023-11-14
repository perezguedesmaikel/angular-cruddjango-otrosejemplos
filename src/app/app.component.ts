import {Component, ViewChild} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ContadorComponent} from "./contador/contador.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso-angular';
  @ViewChild('myComponent') myComponent!: ContadorComponent;

  manejarHijo() {
    this.myComponent.logValue('ahora si caballo!!!')
  }

}
