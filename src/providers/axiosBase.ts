import axios from "axios"




class Provider {
    private readonly axiosInstance: any;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL
        });
    }


    get(url: string) {
        return new Promise((resolve) => this.axiosInstance.get(url)
            .then((response: any) => resolve(response?.data))
            .catch((error: any) => resolve(error?.response))
        )
    }
}

export default Provider;



