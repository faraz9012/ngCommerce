import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpinnerComponent],
  template: `
  @if(isLoading){
    <app-spinner></app-spinner>
  }
  @if(!isLoading){
    <router-outlet></router-outlet>
  }
  `,
  styles: ``
})
export class AppComponent implements OnInit {

  title = 'ngCommerce';
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

}