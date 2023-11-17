import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {
  @Input() title: string = 'Prueba'
  @Output() customEvent = new EventEmitter();

  emitEvent() {
    this.customEvent.emit();
  }
}
