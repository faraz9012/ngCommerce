import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
      path: 'server-error',
      loadComponent:() => import("./errors/server-error/server-error.component").then(m => m.ServerErrorComponent)
    },
    {
      path: '**',
      loadComponent:() => import("./errors/page-not-found/page-not-found.component").then(m => m.PageNotFoundComponent), 
      pathMatch: 'full'
    }
  ];