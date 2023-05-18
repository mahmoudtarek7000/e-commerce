import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./pages/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JwtInterceptor} from "./interceptors/JWT-interceptor/jwt.interceptor";
import {ErrorInterceptor} from "./interceptors/error-interceptor/error.interceptor";
import {fakeBackendProvider} from "./interceptors/mockBackEnd-interceptor/mock-back-end.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsModule} from "./pages/product-list/products.module";
import { ProductsTableComponent } from './shared/components/products-table/products-table.component';
import {SharedModuleModule} from "./shared/shared-module.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    ProductsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
