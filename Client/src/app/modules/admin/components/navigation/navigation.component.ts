import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { SIDENAV_DATA, SubMenu } from "../../constants/sidenav";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  treeControl = new NestedTreeControl<SubMenu>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SubMenu>();

  constructor() {
    this.dataSource.data = SIDENAV_DATA;
  }

  hasChild = (_: number, node: SubMenu) => !!node.children && node.children.length > 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
