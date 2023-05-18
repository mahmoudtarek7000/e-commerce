import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogInComponent} from "./log-in/log-in.component";
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {AuthRoutingModule} from "./auth.routing.module";
import {ProductsModule} from "../product-list/products.module";
import {ProductsRoutingModule} from "../product-list/products.routing.module";



@NgModule({
  declarations: [LogInComponent],
  exports: [
    LogInComponent,
  ],
  imports: [
    CommonModule, FormsModule, AngularMaterialModule, ReactiveFormsModule, AuthRoutingModule, ProductsRoutingModule]
})
export class AuthModule { }
