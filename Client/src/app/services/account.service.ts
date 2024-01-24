import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";

import { User } from "../modules/public/models/user";
import { environment } from "../../environments/environment";

import { ToastrService } from "ngx-toastr";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  private tokenExpirationTimer: any;


  constructor(
    private http:HttpClient,
    private router:Router, 
    private toastr: ToastrService
  ) { 
    this.checkCurrentUser()
  }
  
  login(model:any){
    return this.http.post<User>(this.baseUrl + 'customer/login', model).pipe(
      map((response:User) => {
        const user = response;
        if(user){
          this.setCurrentUser(user);
        }
      })
    )
  }
  
  setCurrentUser(user : User){
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);

    const decodedToken: { exp: number } = jwtDecode(user.token);
    const remainingTime = decodedToken.exp * 1000 - Date.now();

    this.autoLogout(remainingTime);
  }

  checkCurrentUser(){
    const userExists = localStorage.getItem('user');
    
    if(!userExists) return;
    const currentUser = JSON.parse(userExists);
    this.setCurrentUser(currentUser)
  }

  autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout();
    }, expirationDuration);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.router.navigateByUrl("/login");
    this.toastr.error("Session completed! You've been successfully logged out.")

    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = null;
  }

}
