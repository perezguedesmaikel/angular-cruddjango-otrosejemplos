import {Component} from '@angular/core';
import {CrudService} from "../../services/CrudService";
import {fadeInItems} from "@angular/material/menu";

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
    protected readonly parseInt = parseInt;

    constructor(public crudService: CrudService) {
    }

    async ngOnInit(): Promise<void> {
        try {
            await this.crudService.getProduct('http://localhost:8000/productos/')
        } catch (errors) {
            console.log(errors)
        }
    }

    editar(item: Item) {
        // Lógica para editar el item
    }

    async eliminar(id: number) {
        await this.crudService.deleteProduct('http://localhost:8000/productos/', id)
    }
}
