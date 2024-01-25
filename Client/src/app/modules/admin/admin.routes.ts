import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
      path: "",
      component: AdminComponent,
      children: [
        {
          path: '',
          component: DashboardComponent,
          pathMatch: 'full',
        },
        {
          path: "customer",
          loadChildren:() => import("./modules/customers/customer.routes").then(m => m.routes),
        },
        {
          path: "category",
          loadChildren:() => import("./modules/category/category.routes").then(m => m.routes),
        },
        {
          path: "product",
          loadChildren:() => import("./modules/product/product.routes").then(m => m.routes),
        }
      ]
    }
  ];