import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { AngularMaterialSharedModule } from "../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';


const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialSharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
