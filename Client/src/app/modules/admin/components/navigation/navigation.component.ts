import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of, Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { delay, map } from 'rxjs/operators';

import { AccountService } from "../../../../services/account.service";

import { Side_Navbar, sideMenu } from "../../constants/sidenav";

const sideMenuObservable: Observable<sideMenu[]> = of(Side_Navbar).pipe(delay(0));

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule ],
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

  toggleSubMenu(menu: sideMenu) {
    const updatedMenu = { ...menu, isToggle: !menu.isToggle };
  
    const updatedMenus = this.sideMenu$.pipe(
      map(menus => menus.map(item => (item === menu ? updatedMenu : { ...item, isToggle: false })))
    );
  
    updatedMenus.subscribe(newMenus => {
      this.sideMenu$ = of(newMenus);
    });
  }
  
  logout(){
    this._accountService.logout();
  }
}
