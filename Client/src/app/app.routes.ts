import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
      path: "",
      loadChildren:() => import("./modules/public/public.routes").then(m => m.routes),
    },
    {
      path: "admin",
      canActivate: [authGuard],
      loadChildren:() => import("./modules/admin/admin.routes").then(m => m.routes)
    },
    {
      path: '**',
      loadComponent:() => import("./errors/page-not-found/page-not-found.component").then(m => m.PageNotFoundComponent), 
      pathMatch: 'full'
    }
  ];