import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";

import { AccountService } from "../../../../services/account.service";
import { User } from "../../models/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model:any={}
  currentUser$: Observable<User | null> = of(null);

  constructor(public accountService:AccountService, private router:Router){}

  onLogin(){
    this.accountService.login(this.model).subscribe({
      next: () => {
          this.router.navigateByUrl('/');
      },
      error: (error)=>{
          console.log(error.error.message);
      }
    });
  }
}
