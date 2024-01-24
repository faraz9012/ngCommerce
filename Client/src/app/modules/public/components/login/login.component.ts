import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";

import { User } from "../../models/user";

import { AccountService } from "../../../../services/account.service";
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User | null> = of(null);
  loginForm: FormGroup = new FormGroup({});
  isLoading = false;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private toastr:ToastrService
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
    this.isLoading = true;
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => {
        this.toastr.success("Login successful");
        this.isLoading = false;
        this.router.navigateByUrl('/');
      }
        
    });
  }

}