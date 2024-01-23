import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of, Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { delay } from 'rxjs/operators';

import { AccountService } from "../../../../services/account.service";

import { Side_Navbar, sideMenu } from "../../constants/sidenav";

const sideMenuObservable: Observable<sideMenu[]> = of(Side_Navbar).pipe(delay(0));

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterModule ],
  templateUrl: './navigation.component.html',
  styles: ``,
})

export class NavigationComponent implements OnInit {

  //Variables
  logo = '../../../../../favicon.ico';
  sideMenu$: Observable<sideMenu[]> = of([]);

  //Services
  _accountService = inject(AccountService);
  
  ngOnInit(): void {
    this.sideMenu$ = sideMenuObservable;
  }
  
  logout(){
    this._accountService.logout();
  }
}
