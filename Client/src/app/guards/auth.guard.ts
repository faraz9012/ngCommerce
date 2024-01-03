import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { AccountService } from "../services/account.service";

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  return accountService.currentUser$.pipe(
    map(user => {
      if(user) return true;
      else{
        router.navigateByUrl("/login");
        return false
      }
    })
  );
};
