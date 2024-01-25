import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from "rxjs";
import { faSave, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CustomersService } from "../../../../../services/customers.service";
import { Customer } from "../../../models/customers";
import { initFlowbite } from "flowbite";

@Component({
  selector: 'app-list-customers',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list-customers.component.html',
  styles: ``
})
export class ListCustomersComponent implements OnInit {
  //variables
  showModal: boolean = false;
  toggleDropdown: boolean = false;
  customers$: Observable<Customer[]> | undefined;
  user$: Observable<Customer> | undefined;
  selectedUser: Customer | undefined;
  editUser:any;
  
  //Constants
  faSave = faSave;
  faSearch = faSearch;

  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllCustomers();
  }

  fetchAllCustomers(): void {
    this.customers$ = this.customerService.getAllCustomers();
  }

  editCustomerModal(id: number): void {
    this.showModal = !this.showModal;
  
    this.customerService.getCustomerById(id).subscribe({
      next: (user) => {
        this.selectedUser = user
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        
      }
    });
  }
  
  searchCustomer(username:string){
    if(username){
    this.customerService.getCustomerByUsername(username).subscribe({
      next: (user) => {
        this.customers$ = of([user]);
      },
      error: error=> console.log(error)
    });
    }
    else{
      this.fetchAllCustomers();
    }
  }

}
