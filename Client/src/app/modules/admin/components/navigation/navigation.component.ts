import { Component, inject } from '@angular/core';
import { Side_Navbar } from "../../constants/sidenav";
import { AccountService } from "../../../../services/account.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  //Variables
  logo = '../../../../../favicon.ico';
  isToggle = false;

  //Constants
  sideMenu = Side_Navbar

  //Services
  _accountService = inject(AccountService);
  
  toggleSubMenu(menu: any) {
    menu.isToggle = !menu.isToggle;
    this.sideMenu.filter(item => item !== menu).forEach(item => item.isToggle = false);
  }
  
  logout(){
    this._accountService.logout();
  }
}
