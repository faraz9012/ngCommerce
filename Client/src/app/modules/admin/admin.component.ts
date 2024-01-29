import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from "flowbite";

import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <div class="lg:ml-64">
      <nav class="z-50 w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
              <div class="flex items-center justify-start">
                  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                      type="button"
                      class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                      <span class="sr-only">Open sidebar</span>
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path clip-rule="evenodd" fill-rule="evenodd"
                              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                          </path>
                      </svg>
                  </button>
                  
              <!-- search form -->
              <div>
                  <form class="mr-2 border rounded-md bg-white">
                      <div class="relative">
                          <input type="text" placeholder="Search..."
                              class="block w-full rounded-md border-hidden appearance-none bg-transparent py-1 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6" />
                          <svg class="pointer-events-none absolute right-2 top-1 h-6 w-6 fill-slate-400"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z">
                              </path>
                          </svg>
                      </div>
                  </form>
              </div>
              </div>
              <div class="flex items-center">
                  <div class="flex items-center ms-3">
                    
                  <button 
                        routerLink="/"
                        class="hidden sm:block px-3 py-1 text-sm font-medium leading-7 bg-slate-200 text-gray-700 hover:text-white hover:bg-[#1c1c21] mx-3 rounded-lg cursor-pointer transition ease-in-out"
                    >
                        <div class="flex items-center text-center">
                            <span class="">Public store</span>
                        </div>
                  </button>
                      <div>
                          <button type="button"
                              class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                              aria-expanded="false" data-dropdown-toggle="dropdown-user">
                              <span class="sr-only">Open user menu</span>
                              <img class="w-8 h-8 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                          </button>
                      </div>
                      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                          id="dropdown-user">
                          <div class="px-4 py-3" role="none">
                              <p class="text-sm text-gray-900 " role="none">
                                  Neil Sims
                              </p>
                              <p class="text-sm font-medium text-gray-900 truncate" role="none">
                                  neil.sims&commat;flowbite.com
                              </p>
                          </div>
                          <ul class="py-1" role="none">
                              <li>
                                  <a href="#"
                                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                      role="menuitem">Dashboard</a>
                              </li>
                              <li>
                                  <a href="#"
                                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                      role="menuitem">Settings</a>
                              </li>
                              <li>
                                  <a href="#"
                                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                      role="menuitem">Earnings</a>
                              </li>
                              <li>
                                  <a href="#"
                                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                      role="menuitem">Sign out</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </nav>
        <div class="p-4 mt-2">
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

export class AdminComponent implements OnInit {

  isLoading: boolean = false;

  ngOnInit(): void {
    initFlowbite();
  }

}