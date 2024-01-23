import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
      path: "",
      loadChildren:() => import("./modules/public/public.routes").then(c => c.routes),
    },
    {
      path: "admin",
      canActivate: [authGuard],
      loadChildren:() => import("./modules/admin/admin.module").then(m => m.AdminModule)
    }
  ];