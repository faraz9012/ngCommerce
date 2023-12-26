import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AngularMaterialSharedModule } from "../shared/shared.module";
import { PublicComponent } from "./public.component";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent
  }
];

@NgModule({
  declarations: [
    PublicComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialSharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
