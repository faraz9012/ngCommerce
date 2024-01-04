import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren:() => import("./modules/public/public.module").then(m => m.PublicModule),
  },
  {
    path: "admin",
    // canActivate: [authGuard],
    loadChildren:() => import("./modules/admin/admin.module").then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
