import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from "flowbite";

import { NavigationComponent } from './components/navigation/navigation.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, SpinnerComponent],
  template: `
  @if(isLoading){
    <app-spinner></app-spinner>
  }
  @if(!isLoading){
    <app-navigation></app-navigation>

    <div class="p-4 lg:ml-64">
        <div class="p-4 mt-12">
            <router-outlet></router-outlet>
        </div>
    </div>
  }
`,
  styles: ``
})

export class AdminComponent implements OnInit{
  
  isLoading: boolean = true;

  ngOnInit(): void {
    initFlowbite();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}