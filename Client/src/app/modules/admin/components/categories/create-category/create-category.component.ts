import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

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
  published = [true, false];
  showOnHomepage = [true, false];
  includeInTopMenu = [true, false];
  statusSignal: boolean = true;
  model: any;

  //Constants
  faCircleInfo = faCircleInfo;
  
  //Services
  _categoryService = inject(CategoryService);
  _fb = inject(FormBuilder);

  initializeForm() {
    this.createCategoryForm = this._fb.group({
      formDetails: this._fb.group({
        name: ['', [Validators.min(0.0001),Validators.max(0.9999),Validators.required]],
        description: [''],
      }),
      imageUpload: this._fb.group({
        srcAttribute: [],
        altAttribute: [],
        titleAttribute: [],
        file: [null, Validators.required]
      }),
      parentCategoryId: [0],
      published: [true],
      showOnHomepage: [false],
      includeInTopMenu: [false],
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllCategories();
    this.initializeForm();

    this.createCategoryForm.get('published')?.valueChanges.subscribe((status: boolean) => {
      // Update statusSignal based on the selected option
      this.statusSignal = status;
    });
  }

  onFileSelected(file: File): void {
    this.createCategoryForm.get('imageUpload.file')?.setValue(file);
  }

  fetchAllCategories(): void {
    this.categories$ = this._categoryService.getAllCategories();
  }

  createCategory() {
    const formValue = this.createCategoryForm.value;
    const categoryFormValues = this.createCategoryForm.value;
    const model = {
      name: categoryFormValues.formDetails.name,
      description: categoryFormValues.formDetails.description,
      parentCategoryId: categoryFormValues.parentCategoryId,
      published: categoryFormValues.published,
      showOnHomepage: categoryFormValues.showOnHomepage,
      includeInTopMenu: categoryFormValues.includeInTopMenu,
    };

    // this._categoryService.create(model);
    console.log(formValue);
    

  }

  onSeoGeneralFormValues($event: { name: string; description: string; tags: string }) {
    throw new Error('Method not implemented.');
  }
}
