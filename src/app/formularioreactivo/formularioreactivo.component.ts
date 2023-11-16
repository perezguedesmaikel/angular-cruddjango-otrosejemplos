import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-formularioreactivo',
  templateUrl: './formularioreactivo.component.html',
  styleUrls: ['./formularioreactivo.component.css']
})
export class FormularioreactivoComponent {
  name: FormControl<string | null> = new FormControl('', Validators.required)
  email: FormControl<string | null> = new FormControl('', [Validators.required, Validators.email])
}
