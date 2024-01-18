import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { FontAwesomeSharedModule } from "../shared/shared.module";
import { PublicComponent } from "./public.component";
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [
      {
        path: "",
        component: HomepageComponent
      },
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
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeSharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
