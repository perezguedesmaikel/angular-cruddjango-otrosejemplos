import {Component} from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador = 0
  hide = false
  myInput = 'lele'
  isDisabled = false
  newInput = 'Valor inicial'
  secondInput = 'secondInput'

  modifyCounter(action: 'incrementar' | 'decrementar' | 'resetear') {
    switch (action) {
      case 'incrementar':
        this.contador = this.contador + 1
        break
      case 'decrementar':
        this.contador = this.contador - 1
        break
      case 'resetear':
        this.contador = 0
        break
    }
  }

  vewEvent(event: MouseEvent) {
    console.log('Posición X:', event.clientX);
    console.log('Posición Y:', event.clientY);
  }

  hideText() {
    this.hide = !this.hide
  }

  handleChangeInput(event: any) {
    this.myInput = event.target.value
    console.log(this.myInput)
  }

  viewValueNewInput() {
    console.log(this.newInput)
  }

  logValue(value: string) {
    console.log(value)
  }
}



