
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component } from '@angular/core';

import { Observable, map, shareReplay } from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../public.component.css'],
})
export class FooterComponent {
  constructor(
    private breakpointObserver: BreakpointObserver
    ){}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
}
