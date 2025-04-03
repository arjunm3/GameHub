import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next:string|null;
  results: T[];
}

const apiClientInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f61aa5decd6948c9bf45ed86876a4176",
  },
});


class ApiClient<T>{
  endpoint:string;
  constructor(endPoint:string){
    this.endpoint=endPoint;
  }
  getAll=(config:AxiosRequestConfig)=>{
    return apiClientInstance.get<FetchResponse<T>>(this.endpoint,config).then(res=>res.data)
  }
  get=(id:string)=>{
    return apiClientInstance.get<T>(`${this.endpoint}/${id}`).then(res=>res.data);
  }
}

export default ApiClient;