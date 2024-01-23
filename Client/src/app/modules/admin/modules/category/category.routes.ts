import { Routes } from "@angular/router";

import { ListCategoriesComponent } from "../../components/categories/list-categories/list-categories.component";
import { CreateCategoryComponent } from "../../components/categories/create-category/create-category.component";

export const routes: Routes = [
    {
        path: "list",
        component: ListCategoriesComponent,
    },
    {
        path: "create",
        component: CreateCategoryComponent,
    }
];