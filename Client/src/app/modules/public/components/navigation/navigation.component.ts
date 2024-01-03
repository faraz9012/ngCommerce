import { Component } from '@angular/core';
import { AccountService } from "../../../../services/account.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  showFiller = false;
  constructor(public accountService:AccountService){}

  logout(){
    this.accountService.logout();
  }
}
