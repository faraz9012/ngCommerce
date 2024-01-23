import { Routes } from "@angular/router";

import { ListCustomersComponent } from "../../components/customers/list-customers/list-customers.component";

export const routes: Routes = [
    {
      path: "list",
      component: ListCustomersComponent,
    }
  ];