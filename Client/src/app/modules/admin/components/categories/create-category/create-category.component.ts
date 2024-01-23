import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';

import { Category, CreateCategory } from '../../../models/category';

import { CategoryService } from '../../../../../services/category.service';
import { FileUploadComponent } from '../../shared/file-upload/file-upload.component';
import { GeneralFormComponent } from '../../shared/general-form/general-form.component';
import { SeoGeneralFormComponent } from '../../shared/seo-general-form/seo-general-form.component';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FileUploadComponent, GeneralFormComponent, SeoGeneralFormComponent, ReactiveFormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit {

  //Variables
  categories$: Observable<Category[]> | undefined;
  createCategoryForm: FormGroup = new FormGroup({});
  imageUploadForm: FormGroup = new FormGroup({});
  published = [true, false];
  showOnHomepage = [true, false];
  includeInTopMenu = [true, false];
  statusSignal: boolean = true;
  model: any;

  //Services
  _categoryService = inject(CategoryService);
  _fb = inject(FormBuilder);

  initializeForm() {
    this.createCategoryForm = this._fb.group({
      formDetails: this._fb.group({
        name: ['', [Validators.min(0.0001), Validators.max(0.9999), Validators.required]],
        description: [''],
      }),
      imageUpload: this._fb.group({
        pictureId: [0],
        file: [null]
      }),
      parentCategoryId: [0],
      published: [true],
      showOnHomepage: [false],
      includeInTopMenu: [false],
    });

    this.imageUploadForm = this.createCategoryForm.get('imageUpload') as UntypedFormGroup;
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
    Object.values(this.createCategoryForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.markAsTouched();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });

    const { formDetails, parentCategoryId, imageUpload, published, showOnHomepage, includeInTopMenu } = this.createCategoryForm.value;

    if (this.createCategoryForm.invalid) {
      return;
    }

    const model: CreateCategory = {
      name: formDetails.name,
      description: formDetails.description,
      parentCategoryId,
      pictureId: imageUpload.pictureId,
      published,
      showOnHomepage,
      includeInTopMenu,
    };

    this._categoryService.create(model).subscribe(
      (res) => console.log(res)
    );
  }

}
