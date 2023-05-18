import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../DesignModules/angular-material.module";
import {ProductsTableComponent} from "./components/products-table/products-table.component";
import { TableBtnsComponent } from './components/table-btns/table-btns.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RemoveProductComponent } from './components/remove-product/remove-product.component';



@NgModule({
  declarations: [
    ProductsTableComponent,
    TableBtnsComponent,
    AddProductComponent,
    RemoveProductComponent
  ],
  exports: [
    ProductsTableComponent,
    TableBtnsComponent, AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule, AngularMaterialModule, ReactiveFormsModule
  ]
})
export class SharedModuleModule { }
