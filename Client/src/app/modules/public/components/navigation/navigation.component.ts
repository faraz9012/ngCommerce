import { Component, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountService } from "../../../../services/account.service";

import { Navbar } from "../../constants/navbar";
import { Social_Links } from "../../constants/footer";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterModule ],
  templateUrl: './navigation.component.html',
  styles: ``,
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