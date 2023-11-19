import {Component} from '@angular/core';
import {CrudService} from "../../services/CrudService";
import axios from "axios";

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
    items: Item[] = [];

    agregar() {
        const newItem: Item = {
            precio: 15,
            nombre: 'Nuevo Item',
            descripcion: 'Descripción del Nuevo Item'
        };
        this.items.push(newItem);
    }

    async ngOnInit(): Promise<void> {
        const service = new CrudService('http://localhost:8000/')
        try {
            this.items = await service.getProduct('productos')
        } catch (errors) {
            console.log(errors)
        }
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
