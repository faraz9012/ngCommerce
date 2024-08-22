import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { initFlowbite } from 'flowbite';

import { Product } from '../../../models/product';
import { ProductService } from '../../../../../services/product.service';
import { CommonModule } from '@angular/common';
import { PictureService } from '../../../../../services/picture.service';
import { CategoryService } from '../../../../../services/category.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-products.component.html',
  styles: ``
})
export class ListProductsComponent implements OnInit{

  //Variables
  products$: Observable<Product[]> | undefined;
  productImageSrcAttribute : string =''; 

  //Services
  _productService = inject(ProductService);
  _pictureService = inject(PictureService);
  _categoryService = inject(CategoryService);

  ngOnInit(): void {
    initFlowbite();
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.products$ = this._productService.getAllProducts();
  }

  getProductImage(id: number) {
    if (id <= 0){
      this.productImageSrcAttribute = 'assets/img/product-image-placeholder.webp'
    }

    // this._pictureService.getPictureById(id).subscribe(
    //   (res:any)=> this.productImageSrcAttribute = res.srcAttribute,
    // );

    console.log(id);
    
    return this.productImageSrcAttribute;
  }

}
