import {Component} from '@angular/core';

interface Item {
    id?: number;
    precio: number;
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
        {id: 1, nombre: 'Item 1', precio: 10.20, descripcion: 'Descripción del Item 1'},
        {id: 2, nombre: 'Item 2', precio: 11.20, descripcion: 'Descripción del Item 2'},
        {id: 3, nombre: 'Item 3', precio: 10.25, descripcion: 'Descripción del Item 3'}
    ];

    agregar() {
        const newItem: Item = {
            precio: 15,
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
