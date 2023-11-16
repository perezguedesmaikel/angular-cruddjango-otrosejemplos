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


  ngOnInit() {
    console.log('Estado inicial');
    this.email.valueChanges.subscribe(() => {
      console.log('Valor de la variable reactiva:', this.email.errors?.['email'] ?? '');
      // Realiza acciones cada vez que la variable reactiva cambie de valor
    });
  }

}
