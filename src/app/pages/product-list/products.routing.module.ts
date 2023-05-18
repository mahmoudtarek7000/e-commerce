import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from "./products-list/products-list.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductsResolver} from "../../resolvers/product.resolver";


const routes: Routes = [
  {
    path: 'products-list',
    component: ProductsListComponent,
    resolve: {
      Products: ProductsResolver
    }
  },]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
