
import { Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { PublicComponent } from "./public.component";
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
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