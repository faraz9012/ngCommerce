import { Component, HostBinding, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AccountService } from "../../../../services/account.service";
import { Navbar } from "../../constants/navbar";
import { Social_Links } from "../../constants/footer";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  animations: [
    trigger('dropdownInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(1rem)' }),
        animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(1rem)' }))
      ])
    ])
  ]
})
export class NavigationComponent {
  logo = '../../../../../favicon.ico';
  isToggle = false;
  showMiniCart = false;

  socialLinks = Social_Links;

  @HostBinding('@.disabled') get disableAnimation() {
    return !this.isToggle;
  }

  menuList = Navbar;
  _accountService = inject(AccountService);
  
  ngOnInit() {
  }

  toggleSubMenu(menu: any) {
    menu.isToggle = !menu.isToggle;

    this.menuList.filter(item => item !== menu).forEach(item => item.isToggle = false);
  }
  
  logout(){
    this._accountService.logout();
  }
}
