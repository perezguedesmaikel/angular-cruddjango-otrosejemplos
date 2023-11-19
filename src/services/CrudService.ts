import axios, {AxiosResponse} from "axios";

export class CrudService {
    baseUrl: string;

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
}
