import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../modules/admin/models/category';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;
  categories:Category[] = [];

  constructor(private http:HttpClient) { }

  getAllCategories(){
    if(this.categories.length > 0) return of(this.categories);
    return this.http.get<Category[]>(this.baseUrl + 'category').pipe(
      map(categories => {
        this.categories = categories;
        return categories;
      })
    );
  }

  create(model: any){
    return this.http.post<Category>(this.baseUrl + 'category/create', model).subscribe(
      (response) => console.log(response)
      
    );
    
  }
}
