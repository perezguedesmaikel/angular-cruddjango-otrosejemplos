import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  parentMessage = 'Mensaje desde el padre'

  probeForParent() {
    alert('Probando desde el padre')
  }
}
