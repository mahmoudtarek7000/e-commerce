import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductsService} from "../../../services/products-service/products.service";

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.sass']
})
export class RemoveProductComponent {
  id!: number;
  constructor(public dialogRef: MatDialogRef<RemoveProductComponent>, private productService:ProductsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  deleteProduct(): void {
    this.productService.deleteProduct(this.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
