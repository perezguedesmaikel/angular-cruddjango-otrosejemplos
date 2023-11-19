import axios, {AxiosResponse} from "axios";

interface Item {
    id?: number;
    precio: number;
    nombre: string;
    descripcion: string;
}

export class CrudService {
    baseUrl: string;
    items: Item[] = [];

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getProduct(endPoint: string) {
        try {
            const res: AxiosResponse<any, any> = await axios.get(this.baseUrl + endPoint);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct(endPoint: string, data: any) {
        try {
            await axios.post(this.baseUrl + endPoint, data);
        } catch (error) {
            console.log(error);
        }
    }
}
