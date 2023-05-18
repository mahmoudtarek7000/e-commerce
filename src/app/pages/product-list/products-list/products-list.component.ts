import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products-service/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit{
  products = [];
  constructor(private route: ActivatedRoute, public productsService: ProductsService) {

  }
ngOnInit() {
this.route.data.subscribe((res: any) => {
this.products = res.Products;
})}

  updateProducts(event: any) {
    if (event) {
      this.products = this.productsService.getProducts()
    }
  }
}
