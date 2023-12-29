import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, of } from "rxjs";

export interface Customer {
  id: number
  userName: string;
  active: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  members:Customer[] = [];

  baseUrl = 'https://localhost:5001/api/'
  constructor(private http:HttpClient) { }

  getAllCustomers(){
    if(this.members.length > 0) return of(this.members);
    return this.http.get<Customer[]>(this.baseUrl + 'customer').pipe(
      map(members => {
        this.members = members;
        return members;
      })
    );
  }
}
