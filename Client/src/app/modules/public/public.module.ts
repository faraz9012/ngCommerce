import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AngularMaterialSharedModule } from "../shared/shared.module";
import { PublicComponent } from "./public.component";
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PublicComponent,
    HomepageComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialSharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
