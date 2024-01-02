import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, map, of, shareReplay } from "rxjs";

import { AccountService } from "../../../../services/account.service";
import { User } from "../../models/user";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User | null> = of(null);
  loginForm: FormGroup = new FormGroup({});

  constructor(
    public accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error.error.message);
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait || Breakpoints.HandsetLandscape)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
