import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {CrudService} from "../../services/CrudService";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";


/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
    selector: 'dialog-content-example',
    templateUrl: 'dialog-content-example.html',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, NgIf, MatIconModule],
})
export class DialogContentExample {

    @Input() type: 'create' | 'update' = 'create'
    @Input() item = {}

    constructor(public dialog: MatDialog, public crudService: CrudService) {
    }

    openDialog() {
        this.crudService.type = this.type
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                item: this.type === 'create' ? {nombre: '', precio: '', descripcion: ''} : this.item,
                type: this.type
            },

        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, FormsModule]
})
export class DialogComponent {
    item = {
        nombre: '', precio: '', descripcion: '', id: 0
    }
    type: 'create' | 'update' = 'create'
    // item = {
    //     nombre: this.crudService.type === 'create' ? '' : this.product.nombre,
    //     precio: this.crudService.type === 'create' ? '' : this.product.precio,
    //     descripcion: this.crudService.type === 'create' ? '' : this.product.descripcion
    // }

    constructor(public crudService: CrudService, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.item = data.item;
        this.type = data.type;

    }

    async handleSubmit() {
        if (this.type === 'create') {
            try {
                await this.crudService.createProduct('http://localhost:8000/productos/', this.item)
            } catch (errors) {
                console.log(errors)
            }
        } else {
            try {
                await this.crudService.updateProduct('http://localhost:8000/productos', this.item.id, this.item)
            } catch (errors) {
                console.log(errors)
            }
        }

    }
}
