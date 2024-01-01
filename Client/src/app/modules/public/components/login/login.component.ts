import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";

import { AccountService } from "../../../../services/account.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  model:any={}
  currentUser$: Observable<User | null> = of(null);
  loginForm: FormGroup = new FormGroup({});

  constructor(public accountService:AccountService, private router:Router, private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(){
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(){
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => {
          this.router.navigateByUrl('/');
      },
      error: (error)=>{
          console.log(error.error.message);
      }
    });
  }
}
