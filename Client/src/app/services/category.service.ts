import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category, CreateCategory } from '../modules/admin/models/category';
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

  create(model: CreateCategory){
    return this.http.post<CreateCategory>(this.baseUrl + 'category/create', model);
  }

  getCategoryById(id:number){
    const category = this.categories.find(x => x.id == id)
    if(category) return of(category);
    return this.http.get<Category>(this.baseUrl + 'customer/' + id);
  }
}
