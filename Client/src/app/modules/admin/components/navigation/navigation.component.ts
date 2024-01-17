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

  sideMenu$: Observable<sideMenu[]> = of([]);

  //Variables
  logo = '../../../../../favicon.ico';
  isToggle = false;


  //Services
  _accountService = inject(AccountService);
  
  ngOnInit(): void {
    this.sideMenu$ = sideMenuObservable;
  }

  toggleSubMenu(menu: sideMenu) {
    if (this.sideMenu$) {
      // Using `subscribe` to modify the data
      this.sideMenu$.subscribe(data => {
        menu.isToggle = !menu.isToggle;
        data.filter(item => item !== menu).forEach(item => item.isToggle = false);
      });
    }
  }
  
  logout(){
    this._accountService.logout();
  }
}
