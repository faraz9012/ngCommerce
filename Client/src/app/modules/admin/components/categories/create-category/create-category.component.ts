import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { Category } from '../../../models/category';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit {

  //Variables
  categories$: Observable<Category[]> | undefined;

  //Services
  _categoryService = inject(CategoryService);

  @ViewChild('createCategoryForm') createCategoryForm: NgForm | undefined;

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllCategories();
  }

  fetchAllCategories(): void {
    this.categories$ = this._categoryService.getAllCategories();
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
