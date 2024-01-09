import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, of } from "rxjs";
import { Customer } from "../modules/admin/models/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl = 'https://localhost:5001/api/'
  customers:Customer[] = [];

  constructor(private http:HttpClient) { }

  getAllCustomers(){
    if(this.customers.length > 0) return of(this.customers);
    return this.http.get<Customer[]>(this.baseUrl + 'customer').pipe(
      map(customers => {
        this.customers = customers;
        return customers;
      })
    );
  }

  getCustomerById(id:number){
    const customer = this.customers.find(x => x.id == id)
    if(customer) return of(customer);
    return this.http.get<Customer>(this.baseUrl + 'customer/' + id);
  }

  getCustomerByUsername(username:string){
    const customer = this.customers.find(x=>x.username == username);
    if(customer) return of(customer);
    return this.http.get<Customer>(this.baseUrl + 'customer/' + username);
  }
  
}
