import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatGridTile} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule
  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridTile,
    MatCardModule,
    MatMenuModule,
    MatTreeModule
  ]
})
export class AngularMaterialSharedModule { }
