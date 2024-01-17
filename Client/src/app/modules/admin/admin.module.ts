import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { FontAwesomeSharedModule } from "../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListCustomersComponent } from './components/customers/list-customers/list-customers.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './components/shared/file-upload/file-upload.component';
import { GeneralFormComponent } from './components/shared/general-form/general-form.component';
import { SeoGeneralFormComponent } from './components/shared/seo-general-form/seo-general-form.component';
import { MultiSelectComponent } from './components/shared/multi-select/multi-select.component';

const routes: Routes = [
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
        loadChildren:() => import("./modules/customers/customers.module").then(m => m.CustomersModule),
      },
      {
        path: "category",
        loadChildren:() => import("./modules/categories/categories.module").then(m => m.CategoriesModule),
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavigationComponent,
    ListCustomersComponent,
    CreateCategoryComponent,
    ListCategoriesComponent,
    FileUploadComponent,
    GeneralFormComponent,
    SeoGeneralFormComponent,
    MultiSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeSharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
