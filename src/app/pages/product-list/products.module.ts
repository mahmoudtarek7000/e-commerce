import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductsRoutingModule} from "./products.routing.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {SharedModuleModule} from "../../shared/shared-module.module";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule, AngularMaterialModule, ProductsRoutingModule, SharedModuleModule,
  ],
  exports: [ProductsListComponent],

})
export class ProductsModule { }
