import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { CreateProduct } from '../modules/admin/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(model: CreateProduct){
    return this.http.post<CreateProduct>(this.baseUrl + 'product/create', model);
  }
}
