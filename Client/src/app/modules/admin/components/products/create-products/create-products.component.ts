import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { initFlowbite } from 'flowbite';
import { CategoryService } from '../../../../../services/category.service';

import { CreateProduct } from '../../../models/product';
import { Category } from '../../../models/category';

import { FileUploadComponent } from '../../shared/file-upload/file-upload.component';
import { GeneralFormComponent } from '../../shared/general-form/general-form.component';
import { SeoGeneralFormComponent } from '../../shared/seo-general-form/seo-general-form.component';
import { MultiSelectComponent } from '../../shared/multi-select/multi-select.component';
import { BulkUploadComponent } from '../../shared/bulk-upload/bulk-upload.component';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [
    CommonModule, 
    FileUploadComponent, 
    GeneralFormComponent, 
    SeoGeneralFormComponent, 
    ReactiveFormsModule, 
    MultiSelectComponent,
    BulkUploadComponent,
    FormsModule
  ],
  templateUrl: './create-products.component.html',
  styles: ``
})
export class CreateProductsComponent implements OnInit{

  //Variables
  categories$: Observable<Category[]> | undefined;
  createProductyForm: FormGroup = new FormGroup({});
  imageUploadForm: FormGroup = new FormGroup({});
  published = [true, false];
  showOnHomepage = [true, false];
  includeInTopMenu = [true, false];
  statusSignal: boolean = true;
  selectedCategoryIds: string[] = []

  //Services
  _categoryService = inject(CategoryService);
  _fb = inject(FormBuilder);
  
  initializeForm() {
    this.createProductyForm = this._fb.group({
      formDetails: this._fb.group({
        name: ['', [Validators.min(0.0001), Validators.max(0.9999), Validators.required]],
        description: [''],
      }),
      imageUpload: this._fb.group({
        pictureId: [0],
        file: [null]
      }),
      productCategories: this._fb.group({
        category: [0],
      }),
      published: [true],
      showOnHomepage: [false],
      includeInTopMenu: [false],
    });

    this.imageUploadForm = this.createProductyForm.get('imageUpload') as UntypedFormGroup;
  }

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllCategories();
    this.initializeForm();

    this.createProductyForm.get('published')?.valueChanges.subscribe((status: boolean) => {
      // Update statusSignal based on the selected option
      this.statusSignal = status;
    });
  }

  onFileSelected(file: File): void {
    this.createProductyForm.get('imageUpload.file')?.setValue(file);
  }

  fetchAllCategories(): void {
    this.categories$ = this._categoryService.getAllCategories();
  }

  createProduct() {
  // Mark controls as dirty, touched, and update validity
  Object.values(this.createProductyForm.controls).forEach((control) => {
    if (control.invalid) {
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity({ onlySelf: true });
    }
  });

  if (this.createProductyForm.invalid) {
    return;
  }

  const {
    formDetails,
    productCategories,
    category,
    imageUpload,
    featuredImageId,
    thumbnailPictures,
    price,
    published,
    oldPrice,
    markAsNew,
    showOnHomepage,
    includeInTopMenu,
  } = this.createProductyForm.value;

  // Ensure selectedCategoryIds is an array
  const categoryIds = Array.isArray(this.selectedCategoryIds) ? this.selectedCategoryIds : [];

  const model: CreateProduct = {
    name: formDetails.name,
    description: formDetails.description,
    category: [...categoryIds], // Spread the array to create a new instance
    featuredImageId: imageUpload.pictureId,
    thumbnailPictures,
    price,
    oldPrice,
    markAsNew,
    showOnHomepage,
    includeInTopMenu,
    published,
  };

  console.log(model);

  // Call a service method to save the product or perform further actions
  // productService.createProduct(model).subscribe(/* handle response or errors */);
}

  onSelectedCategoryIds(selectedCategoryIds: string[])  {
    this.selectedCategoryIds.length = 0;
  this.selectedCategoryIds.push(...selectedCategoryIds);

  console.log('CategoryIds:', this.selectedCategoryIds);
  }
}
