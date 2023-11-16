import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formularioreactivo',
  templateUrl: './formularioreactivo.component.html',
  styleUrls: ['./formularioreactivo.component.css']
})
export class FormularioreactivoComponent {
  name: FormControl<string | null> = new FormControl('', Validators.required)
  email: FormControl<string | null> = new FormControl('', [Validators.required, Validators.email])
  formUser = new FormGroup([this.email, this.name])

  handleSubmit() {
    console.log({name: this.name.value, email: this.email.value})
  }

}
