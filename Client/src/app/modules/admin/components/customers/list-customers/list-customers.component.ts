import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from "../../../../../services/customers.service";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
