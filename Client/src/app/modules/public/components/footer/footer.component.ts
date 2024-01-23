
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Footer_Menu, Social_Links } from "../../constants/footer";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterModule ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit{
 ngOnInit(): void {
 }
 footerLinks = Footer_Menu;
 socialLinks = Social_Links;
}
