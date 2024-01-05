
import { Component, OnInit } from '@angular/core';
import { Footer_Menu, Social_Links } from "../../constants/footer";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../public.component.css'],
})
export class FooterComponent implements OnInit{
 ngOnInit(): void {
  this.socialLinks.forEach(socialLink => {
    console.log(socialLink.subLinks?.length);
  });
 }
 footerLinks = Footer_Menu;
 socialLinks = Social_Links;
}
