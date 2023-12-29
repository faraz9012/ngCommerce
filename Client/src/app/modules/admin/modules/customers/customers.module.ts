import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListCustomersComponent } from "../../components/customers/list-customers/list-customers.component";

const routes: Routes = [
  {
    path: "list",
    component: ListCustomersComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomersModule { }
