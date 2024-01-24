import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  template: `
      <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-900"></div>
      </div>
  `,
  styles: ``
})
export class SpinnerComponent {

}
