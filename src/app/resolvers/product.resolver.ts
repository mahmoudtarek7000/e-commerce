import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {ProductsService} from "../services/products-service/products.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";
@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<any> {


  constructor(private productsService: ProductsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(this.productsService.getProducts())
    return this.productsService.getProducts();
  }
}


