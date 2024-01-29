import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from "flowbite";

import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  template: `
    <app-navigation></app-navigation>

    <div class="lg:ml-64">
        <div class="p-4 mt-12">
          <div class="min-h-dvh">
            <router-outlet></router-outlet>
           </div>
        </div>
        <div class="bg-white text-center w-full py-1">
          Copyright © 2024 ngCommerce
        </div>
      </div>
`,
  styles: ``
})

export class AdminComponent implements OnInit{
  
  isLoading: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

}