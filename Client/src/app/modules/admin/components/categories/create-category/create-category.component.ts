import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';

import { Category } from '../../../models/category';

import { CategoryService } from '../../../../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit {

  //Variables
  categories$: Observable<Category[]> | undefined;
  createCategoryForm: FormGroup = new FormGroup({});
  publishStatus = ['true', 'false'];
  statusSignal: boolean = true;
  
  //Services
  _categoryService = inject(CategoryService);
  _fb = inject(FormBuilder);

  initializeForm() {
    this.createCategoryForm = this._fb.group({
      formDetails: this._fb.group({
        formName: ['', [Validators.required]],
        formDesc: [''],
      }),
      parentCategory: [],
      publishStatus: ['true'],
      showOnHomepage: [],
      showOnTopNavigation: [],
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllCategories();
    this.initializeForm();
    
    this.createCategoryForm.get('publishStatus')?.valueChanges.subscribe((status: string) => {
      // Update statusSignal based on the selected option
      this.statusSignal = status === 'true';
    });
  }

  fetchAllCategories(): void {
    this.categories$ = this._categoryService.getAllCategories();
  }

  createCategory() {
    console.log(this.createCategoryForm.value);

  }

  onSeoGeneralFormValues($event: { name: string; description: string; tags: string }) {
    throw new Error('Method not implemented.');
  }
}
