import { Component, OnInit, inject } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AccountService } from "../../../../services/account.service";

import { Side_Navbar, sideMenu } from "../../constants/sidenav";

const sideMenuObservable: Observable<sideMenu[]> = of(Side_Navbar).pipe(delay(0));

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
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
