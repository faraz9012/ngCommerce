import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ListCustomersDataSource, ListCustomersItem } from '../../../constants/list-customers-datasource';
import { CustomersService } from "../../../../../services/customers.service";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListCustomersItem>;

  constructor(private customerService:CustomersService){}
  dataSource = new ListCustomersDataSource();
  users: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'active'];

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.users = customers;
      this.dataSource.data = this.users;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
