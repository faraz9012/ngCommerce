import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from "../../components/categories/create-category/create-category.component";

const routes: Routes = [
  {
    path: "create",
    component: CreateCategoryComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CategoriesModule { }