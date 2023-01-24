import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl : string  = "";

  constructor(private Http : HttpClient) { }

  get(endpoint : string )   {
    return this.Http.get(this.baseUrl + endpoint)
  }

  post(endpoint : string , data : any) {
    return this.Http.post(this.baseUrl + endpoint,data);
  }
}
