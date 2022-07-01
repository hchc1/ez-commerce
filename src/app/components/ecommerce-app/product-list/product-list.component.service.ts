import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./model/product";

@Injectable() 
export class ProductService {
  private url = 'https://62bf4c58be8ba3a10d67a381.mockapi.io/products';
  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor (private http:HttpClient) {
    
  }

  getProduct() {
    return this.http.get(this.url)
  }

}