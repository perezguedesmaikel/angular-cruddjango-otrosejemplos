import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {CrudService} from "../../services/CrudService";


/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
    selector: 'dialog-content-example',
    templateUrl: 'dialog-content-example.html',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule],
})
export class DialogContentExample {
    constructor(public dialog: MatDialog) {
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent);

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
    item = {nombre: '', precio: 0, descripcion: ''}

    constructor(public crudService: CrudService) {
    }

    async handleSubmit() {
        await this.crudService.createProduct('http://localhost:8000/productos/', this.item)
        try {

        } catch (errors) {
            console.log(errors)
        }
    }
}
