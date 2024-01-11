import { Component, OnInit } from '@angular/core';
import { initFlowbite } from "flowbite";

@Component({
  selector: 'app-public-root',
  templateUrl: 'public.component.html',
  styleUrls: ['public.component.css']
})

export class PublicComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}

