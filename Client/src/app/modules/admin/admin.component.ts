import {Component, OnInit} from '@angular/core';
import { initFlowbite } from "flowbite";

@Component({
  selector: 'app-admin-root',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }

}

