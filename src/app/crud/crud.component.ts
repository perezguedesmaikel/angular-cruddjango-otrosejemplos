import {Component} from '@angular/core';

interface Item {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


export class CrudComponent {
  items: Item[] = [
    {nombre: 'Item 1', descripcion: 'Descripción del Item 1'},
    {nombre: 'Item 2', descripcion: 'Descripción del Item 2'},
    {nombre: 'Item 3', descripcion: 'Descripción del Item 3'}
  ];

  agregar() {
    const newItem: Item = {
      nombre: 'Nuevo Item',
      descripcion: 'Descripción del Nuevo Item'
    };
    this.items.push(newItem);
  }

  editar(item: Item) {
    // Lógica para editar el item
  }

  eliminar(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
