import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { CreateProduct, Product } from '../modules/admin/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;
  products:Product[] = [];

  constructor(private http: HttpClient) { }

  create(model: CreateProduct){
    return this.http.post<CreateProduct>(this.baseUrl + 'product/create', model);
  }

  getAllProducts() {
    if(this.products.length > 0) return of(this.products);
    return this.http.get<Product[]>(this.baseUrl + 'product').pipe(
      map(produts => {
        this.products = produts;
        return produts;
      })
    );
  }
}
