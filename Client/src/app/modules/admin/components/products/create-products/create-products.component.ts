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
import { ProductService } from '../../../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

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
export class CreateProductsComponent implements OnInit {

  //Variables
  categories$: Observable<Category[]> | undefined;
  createProductyForm: FormGroup = new FormGroup({});
  imageUploadForm: FormGroup = new FormGroup({});
  bulkUploadForm: FormGroup = new FormGroup({});
  published = [true, false];
  showOnHomepage = [true, false];
  includeInTopMenu = [true, false];
  statusSignal: boolean = true;
  selectedCategoryIds: string = ''
  selectedTab: string = 'pricing'; // Default to the 'pricing' tab

  //Services
  _productService = inject(ProductService);
  _categoryService = inject(CategoryService);
  _toastr = inject(ToastrService);
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
      bulkUpload: this._fb.group({
        thumbnailPictureId: [0],
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
    this.bulkUploadForm = this.createProductyForm.get('bulkUpload') as UntypedFormGroup;
  }

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllCategories();
    this.initializeForm();

    this.createProductyForm.get('published')?.valueChanges.subscribe((status: boolean) => {
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
      imageUpload,
      thumbnailPictures,
      price,
      published,
      oldPrice,
      markAsNew,
      showOnHomepage,
      includeInTopMenu,
    } = this.createProductyForm.value;

    const model: CreateProduct = {
      // name: formDetails.name,
      // description: formDetails.description,
      // category: [...categoryIds],
      // featuredImageId: imageUpload.pictureId,
      // thumbnailPictures: ["0"],
      // price: 20,
      // oldPrice: 0,
      // markAsNew: false,
      // showOnHomepage,
      // includeInTopMenu,
      // published,

      // Working example below
      name: formDetails.name,
      description: formDetails.name,
      category: this.selectedCategoryIds || '0',
      featuredImageId: imageUpload.pictureId,
      thumbnailPictures: "2, 24, 25",
      price: 25.00,
      oldPrice: 0,
      markAsNew: false,
      showOnHomepage,
      includeInTopMenu,
      published
    };

    console.log(model);

    this._productService.create(model).subscribe({
      next: () => this._toastr.success("Product created successfully"),
      error: (error) => this._toastr.error(error.error.message)
    });

  }

  onSelectedCategoryIds(selectedCategoryIds: string[]) {
    const categoryIdsString = selectedCategoryIds.join(', ');

    this.selectedCategoryIds = categoryIdsString;
  }


  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
