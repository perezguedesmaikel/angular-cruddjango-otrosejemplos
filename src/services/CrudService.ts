import axios from "axios";
import {Injectable} from "@angular/core";

interface Item {
    id?: number;
    precio: number;
    nombre: string;
    descripcion: string;
}

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    items: Item[] = [];


    async getProduct(endPoint: string) {
        try {
            const res = await axios.get(endPoint)
            this.items = res.data
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct(endPoint: string, data: any) {
        try {
            const res = await axios.post(endPoint, data);
            if (res.status === 201) {
                this.items.push(res.data)
                console.log('Viendo items', this.items)
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(endPoint: string, productId: number) {
        try {
            const res = await axios.delete(`${endPoint}${productId}/`);
            if (res.status === 204) {
                // Filtrar los elementos eliminados de this.items
                this.items = this.items.filter(item => item.id !== productId);
            }
        } catch (error) {
            console.log(error);
        }
    }

}
