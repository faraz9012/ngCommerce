import { Routes } from "@angular/router";

import { ListProductsComponent } from "../../components/products/list-products/list-products.component";
import { CreateProductsComponent } from "../../components/products/create-products/create-products.component";

export const routes: Routes = [
    {
        path: "list",
        component: ListProductsComponent,
    },
    {
        path: "create",
        component: CreateProductsComponent,
    }
];