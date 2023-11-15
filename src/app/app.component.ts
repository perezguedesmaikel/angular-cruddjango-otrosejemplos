import {Component, ViewChild} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ContadorComponent} from "./contador/contador.component";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso-angular';
  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('myComponent') myComponent!: ContadorComponent;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  manejarHijo() {
    this.myComponent.logValue('ahora si caballo!!!')
  }


}
