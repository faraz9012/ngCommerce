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

  <div class="p-4 lg:ml-64" style="padding: 1rem; margin-left: 16rem">
      <div class="p-4 mt-12" style="padding: 1rem; margin-top: 3rem">
          <router-outlet></router-outlet>
      </div>
  </div>
`,
  styles: ``
})

export class AdminComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}