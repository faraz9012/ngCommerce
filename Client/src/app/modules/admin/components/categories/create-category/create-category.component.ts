import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit {


  @ViewChild('createCategoryForm') createCategoryForm: NgForm | undefined;

  ngOnInit(): void {
    initFlowbite();
  }

  createCategory() {

  }

  onGeneralFormValues($event: { name: string; description: string; }) {
    throw new Error('Method not implemented.');
  }
  onSeoGeneralFormValues($event: { name: string; description: string;tags:string }) {
    throw new Error('Method not implemented.');
  }
}
